"use client";
import { CardIcon } from "@/assets/icons/card-icon";
import React, { useEffect, useState } from "react";
import masterCard from "../../../assets/images/master-card.png";
import visa from "../../../assets/images/visa.png";
import selected from "../../../assets/images/selected.png";
import notSelected from "../../../assets/images/not-selected.png";
import paypal from "../../../assets/images/paypal.png";
import Image from "next/image";
import { Button, InputWithLabel } from "@/components/ui";
import ProductComponent from "@/components/products/productComponent";
import { getCartItems, removeFromCart } from "@/lib/cart-utils";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const PaymentWithCard = () => {
  return (
    <div className="">
      <p
        className="text-xl font-light text-secondary-text"
        style={{ fontWeight: 100 }}
      >
        Pay with card
      </p>
      <div className="my-5">
        <InputWithLabel
          label="Email"
          placeholder="designer@example.com"
          type="email"
          name="email"
        />
      </div>
      <div className="mt-10">
        <InputWithLabel
          label="Cardholder Name"
          placeholder="John Doe"
          type="text"
          name="cardholderName"
        />
      </div>
      <div className="mt-10">
        <InputWithLabel
          label="Card Information"
          placeholder="1234 1234 1234 1234"
          type="email"
          name="email"
          className="border-2 border-b-0"
        />
      </div>
      <div className="flex">
        <InputWithLabel
          label=""
          placeholder="designer@example.com"
          type="date"
          name="date"
          className="rounded-r-none"
        />
        <InputWithLabel
          label=""
          placeholder="CVC"
          type="date"
          name="date"
          className="rounded-l-none border-l-0"
        />
      </div>

      <div className="w-full flex justify-between my-3">
        <p
          className="text-xs text-secondary-text"
          style={{ fontWeight: "100" }}
        >
          Subtotal
        </p>
        <p
          className="text-xs text-secondary-text"
          style={{ fontWeight: "100" }}
        >
          $ 25.00
        </p>
      </div>

      <div className="w-full flex justify-between my-6">
        <p className="text-md">Total</p>
        <p className="text-md">$ 25.00</p>
      </div>

      <div className="flex flex-col w-full">
        <Button>Pay $25.00</Button>
      </div>
    </div>
  );
};

const PaymentWithPaypal = () => {
  return (
    <div className="">
      <p
        className="text-xl font-light text-secondary-text"
        style={{ fontWeight: 100 }}
      >
        Pay with Paypal
      </p>
      <div className="my-5">
        <InputWithLabel
          label="Email"
          placeholder="designer@example.com"
          type="email"
          name="email"
        />
      </div>
      <div className="mt-10">
        <InputWithLabel
          label="Password"
          placeholder="*********"
          type="password"
          name="cardholderName"
        />
      </div>

      <div className="w-full flex justify-between my-3">
        <p
          className="text-xs text-secondary-text"
          style={{ fontWeight: "100" }}
        >
          Subtotal
        </p>
        <p
          className="text-xs text-secondary-text"
          style={{ fontWeight: "100" }}
        >
          $ 25.00
        </p>
      </div>

      <div className="w-full flex justify-between my-6">
        <p className="text-md">Total</p>
        <p className="text-md">$ 25.00</p>
      </div>

      <div className="flex flex-col w-full">
        <Button>Pay $25.00</Button>
      </div>
    </div>
  );
};

const Page = () => {
  const { data: session } = useSession();
  const [cartData, setCartData] = useState<Object[]>([]);
  const [paymentMethod, setPayentMethod] = useState("card");

  const addCartDataToServer = async() => {
    // if user is logged in and there is any data in the cart field in the session then store that data in the server
    const cartProductIds = getCartItems();
    if(cartProductIds.length<=0){
        return ;
    }
    const response = await fetch('/api/cart/bulk', {
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify({
          userId:session?.user.id,
          productIds: cartProductIds
        })
    })
    if(!response.ok){
        toast("There is an error in syncing the cart with the server");
        return ;
    }
    toast("Cart has been synced with the server");
    localStorage.setItem('cart', JSON.stringify([]));
    return ;
  };

  const getDataFromSessionCart = async () => {
    const cartProductIds = getCartItems();
    const cartProductsResponse = await Promise.all(
      cartProductIds.map(async (id) => {
        const response = await fetch(`/api/product/?productId=${id}`);
        return response.json();
      })
    );
    setCartData(cartProductsResponse);
  };

  const getDataFromServerCart = async() => {
    // get the data from the data stored in the cart collection of the server if not loggedIn
    const response = await fetch(`/api/cart/?userId=${session?.user.id}`)
    const data= await response.json();
    setCartData(data)
  };

  const removeProductFromCart = async(productId:string) => {
    // remove product from session cart if not signed in else from server
    if(!session){
      removeFromCart(productId)
      toast("Product removed from the cart");
      return;
    }
    
    const response = await fetch('/api/cart', {
      method: "DELETE",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify({
        userId:session?.user.id,
        productId: productId
      })
    })
    const data = await response.json()
    if(!response.ok){
      toast("There is in removing the product from the cart");
      return ;
    }
    toast("Product removed from the cart");
    setCartData(data)
    return ;

  };

  useEffect(() => {
    if (!session) {
      getDataFromSessionCart();
    } else {
      addCartDataToServer();
      getDataFromServerCart();
    }
  }, [session]);

  return (
    <main className="flex flex-col justify-center items-center px-28">
      <div className="w-full grid grid-cols-10 gap-5">
        <div className="w-full col-span-4 rounded-xl flex flex-col items-center overflow-y-scroll h-[80vh]">
          {cartData.length>0 ? cartData?.map((data, index) => (
            <ProductComponent key={index} {...data} isCartItem={true} removeProductFromCart={removeProductFromCart}/>
          )):(
            <div className="h-full flex items-center justify-center text-red-400">You have no products in the cart yet!</div>
          )}
        </div>

        <div className="w-full col-span-6 bg-white rounded-xl p-20 py-12">
          <p className="text-xl font-light" style={{ fontWeight: 400 }}>
            Payment Method
          </p>

          <div
            className="w-full flex justify-between items-center bg-bg my-7 rounded-lg p-4 py-3 cursor-pointer"
            onClick={() => setPayentMethod("card")}
          >
            <div className="flex gap-3">
              <CardIcon />
              <p className="font-light" style={{ fontWeight: 400 }}>
                Credit/Debit Card
              </p>
            </div>
            <div className="flex gap-7 items-center">
              <div className="flex gap-2 items-center">
                <Image src={visa} alt="master card" className="w-12" />
                <Image src={masterCard} alt="master card" className="h-4 w-7" />
              </div>
              {paymentMethod === "card" ? (
                <Image src={selected} alt="master card" className="w-4" />
              ) : (
                <Image src={notSelected} alt="master card" className="w-4" />
              )}
            </div>
          </div>

          <div
            className="w-full flex justify-between items-center bg-bg my-7 rounded-lg p-3 py-2 cursor-pointer"
            onClick={() => setPayentMethod("paypal")}
          >
            <Image src={paypal} alt="master card" className="w-20" />
            <div className="flex gap-7 items-center">
              {paymentMethod === "paypal" ? (
                <Image src={selected} alt="master card" className="w-4" />
              ) : (
                <Image src={notSelected} alt="master card" className="w-4" />
              )}
            </div>
          </div>

          {paymentMethod === "card" ? (
            <PaymentWithCard />
          ) : (
            <PaymentWithPaypal />
          )}

          <div className="text-center text-secondary-text text-xs">
            <p>
              By placing your order, you agree to our Terms & Conditions and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
