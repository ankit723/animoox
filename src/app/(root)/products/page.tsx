'use client';

import ProductComponent from "@/components/products/productComponent";
import ProductNavigation from "@/components/products/productNavigation";
import { useEffect, useState, useRef, useCallback } from "react";
import SkeletonPlaceholder from "@/components/skeleton-placeholder";
import { addToCart } from "@/lib/cart-utils";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function Page(): JSX.Element {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [productData, setProductData] = useState<Object[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState('Featured');
  const observer = useRef<IntersectionObserver | null>(null);

  // Lazy load products with IntersectionObserver
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
      <h1>Best selling Creative</h1>
      <h1>Illustration & Animation sets</h1>
      <h4 className="text-xl text-secondary-text">Extensive amount of file formats, compatible with all design software.</h4>
      <div className="w-full px-20">
        <ProductNavigation
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          selectedDropdownOption={selectedDropdownOption}
          setSelectedDropdownOption={setSelectedDropdownOption}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 w-full gap-6 px-20">
        {isLoading
          ? Array.from({ length: 8 }, (_, index) => <SkeletonPlaceholder key={index} />) // Show placeholders
          : productData.map((data, index) => (
            <ProductComponent
              key={index}
              ref={index === productData.length - 1 ? lastProductRef : undefined} // Attach ref to the last product
              {...data}
              addProductToCart={addProductToCart}
            />
          ))}
      </div>
    </main>
  );
}
