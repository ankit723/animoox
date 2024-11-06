'use client'
import { useState, useEffect, useRef, useCallback } from "react"
import { Input, Button } from "@/components/ui"
import { HeaderDropdownIcon } from "@/assets/icons/header-dropdown-icon"
import { SearchIcon } from "@/assets/icons"
import { HomePageAnimation } from "@/components/home-page-animation"
import ProductComponent from "@/components/products/productComponent"
import SkeletonPlaceholder from "@/components/skeleton-placeholder"
import { addToCart } from "@/lib/cart-utils"
import { toast } from "sonner"
import { useSession } from "next-auth/react"
import { PaddleLogo } from "@/assets/images"
import Image from "next/image"

const productTypes=[
  "Animation",
  "Lottie",
  "Illustration",
  "Isometric",
  "Flat",
  "Iconic",
]

export default function Page(): JSX.Element {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [productData, setProductData] = useState<Object[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    // Initial data fetch
    const getAllProducts = async () => {
      try {
        const response = await fetch('/api/product');
        const products = await response.json();
        setProductData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, []);

  const lastProductRef = useCallback((node: HTMLDivElement | null) => {
    const getAllProducts = async () => {
      try {
        const response = await fetch('/api/product');
        const products = await response.json();
        setProductData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsLoading(true);
        getAllProducts();
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const addProductToCart = async (productId: string) => {
    if (!session) {
      addToCart(productId);
    }
    const response = await fetch('/api/cart', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        userId: session?.user.id,
        productId: productId
      })
    });
    if (!response.ok) {
      toast("There is an error in adding the product to the cart");
      return;
    }
    toast("Product has been added to the cart");
  };


  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold">Get Unlimited</h1>
      <h1 className="font-extrabold">Premium Digital Assets</h1>
      <h4 className="text-xl text-secondary-text">Access 4000+ pre-built illustrations, icons, Lottie animations, and elements for any project.</h4>
      <div className="relative w-full px-[30rem] my-12">
        <Button
          className="py-1 px-5 border-r-black font-normal flex justify-start items-center gap-2 absolute top-[12px] left-[31rem] rounded-none"
          size="lg"
          variant="ghost"
        >
          <p className="text-black">All Items</p>
          <HeaderDropdownIcon />
        </Button>
        <Input type="text" className="rounded-full border-none px-[11rem] py-4" placeholder="Search lottie animation illustration or icon"/>
        <Button
          className="py-3 rounded-full px-5 bg-brand font-normal flex justify-start items-center gap-2 absolute top-[3px] right-[30.5rem]"
          size="lg"
          variant="ghost"
        >
          <SearchIcon fill="none" stroke="white"/>
          <p className="text-white">Search</p>
        </Button>
        <div className="flex justify-center items-center my-3">
          {productTypes.slice(0,4).map((p, index)=>(
            <Button className="rounded-full border-slate-400 py-2 px-2 w-[8rem] bg-transparent text-secondary-text font-extralight" key={index} variant="ghost">
              {p}
            </Button>
          ))}
        </div>
        <div className="flex justify-center items-center my-3">
          {productTypes.slice(4,productTypes.length).map((p, index)=>(
            <Button className="rounded-full border-slate-400 py-2 px-2 w-[8rem] bg-transparent text-secondary-text font-extralight" key={index} variant="ghost">
              {p}
            </Button>
          ))}
        </div>
      </div>

      <HomePageAnimation />

      <section className="w-full px-20">
        <div className="flex justify-between items-center">
          <div className="">
            <h2>Unlimited Creative Solutions for Pick</h2>
            <h4 className="font-extralight text-secondary-text mt-7">Pick the product that you want to pick. Easy peasy Paddle!</h4>
          </div>
          <Button className="rounded-full border-brand py-4 px-5 bg-transparent text-brand font-extralight" variant="ghost">
            See all products
          </Button>
        </div>

        <h3 className="my-10">Recently Updated</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 w-full gap-6">
          {isLoading
            ? Array.from({ length: 8 }, (_, index) => <SkeletonPlaceholder key={index} />) // Show placeholders
            : productData.slice(0, 4).map((data, index) => (
              <ProductComponent
                key={index}
                ref={index === productData.length - 1 ? lastProductRef : undefined} // Attach ref to the last product
                {...data}
                addProductToCart={addProductToCart}
              />
            ))}
        </div>
        
        <div className="flex justify-between items-center my-10">
          <h3 className="">Animated Illustrations</h3>
          <p className="text-brand font-extralight">{"Explore All >"}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 w-full gap-6">
          {isLoading
            ? Array.from({ length: 8 }, (_, index) => <SkeletonPlaceholder key={index} />) // Show placeholders
            : productData.slice(0, 7).map((data, index) => (
              <ProductComponent
                key={index}
                ref={index === productData.length - 1 ? lastProductRef : undefined} // Attach ref to the last product
                {...data}
                addProductToCart={addProductToCart}
              />
            ))}
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className='text-[15px] text-secondary-text font-extralight my-5'>100% Safe and Secure Payment Powered by</p>
          <Image src={PaddleLogo} alt='' width={80}/>
        </div>
        
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-center mt-20">What our clients say about us</h2>
          <p className="text-center text-md font-extralight text-secondary-text w-[40rem]">We always consider our clients as part of us, where we will always be there for them and grow with their products.</p>
        </div>
      </section>
    </main>
  )
}