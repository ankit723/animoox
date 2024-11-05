'use client'
import React, { useState, useEffect } from 'react'
import ProductComponent from '@/components/products/productComponent';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// import DummyProduct from '../../../../assets/images/dummyProduct.png'
import { DummyProduct } from '@/assets/images';
import Image from 'next/image';
import { SelectedIcon } from '@/assets/icons/selected-icon';
import { TipIcon } from '@/assets/icons/tip-icon';
import { Button } from '@/components/ui';
import { PaddleLogo, Illustrate, Slack, Effects } from '@/assets/images';


type ProductDataType = {
  _id: string,
  productId: string,
  type: string,
  price: number,
  tag: string,
  category: string,
  title: string,
  description: string,
  animationCount: number,
  buttonText: string,
  files: string[],
  compatibility: string[],
  highlights: string[],
  smallDescription:string,
  typeSmallDescription:string,
  pack:string
};

const defaultProductData: ProductDataType = {
  _id: '',
  productId: '',
  type: '',
  price: 30.00,
  tag: '',
  category: '',
  title: '',
  description: '',
  animationCount: 24,
  buttonText: '',
  files: ['https://example.com/lottie/traveling1.json', 'https://example.com/lottie/traveling2.json'],
  compatibility: ['Illustrator', 'After Effects', 'Lottie'],
  highlights: [
    '24 Illustrations',
    'After Effects Source File',
    'Lottie File - JSON',
    'Formats: AI, JSON, MOV, EPS, GIF, AEP, AE, SVG, Lottie, MP4',
    '100% Vector & Customizable',
    'Illustrator File Included',
    'Suitable for Web & Apps'
  ],
  smallDescription:"",
  typeSmallDescription:"",
  pack:""
};

const Page = ({ params }: { params: { productId: string } }) => {
  const [productData, setProductData] = useState<ProductDataType>(defaultProductData);
  const [allProducts, setAllProducts] = useState<ProductDataType[]>()

  useEffect(() => {
    // Find the matching product or use the default if none is found
    const getProduct=async()=>{
      const res = await fetch('/api/product');
      const data=await res.json();
      setAllProducts(()=>data)
      const product = data?.find((data:any) => data.productId === params.productId) || defaultProductData;
      console.log(product)
      setProductData(()=>product);
    }
    getProduct();
  }, [params.productId]);

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-10 gap-4 px-20 mb-20">
        <div className="md:col-span-7">
          <div className='flex flex-col gap-3 mb-10'>
            <p className='text-md text-secondary-text font-light'>{productData.category}</p>
            <h2 className='text-4xl'>{productData.title}</h2>
            <p className=' text-secondary-text font-extralight'>{productData.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-3">
            {productData.files.map((f, index) => (
              <div key={index} className="h-60 w-60 bg-secondary rounded-xl">
                {/* <Lottie animationData={f} loop={true} className='w-full h-full bg-cover'/> */}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 w-full relative bg-white flex flex-col items-center h-fit rounded-xl">
          <Carousel className="w-full relative">
            <CarouselContent className="w-full flex">
              <CarouselItem className="w-full">
                <Image src={DummyProduct} alt='' className="w-full h-full object-cover" />
              </CarouselItem>
              <CarouselItem className="w-full">
                <Image src={DummyProduct} alt='' className="w-full h-full object-cover" />
              </CarouselItem>
              <CarouselItem className="w-full">
                <Image src={DummyProduct} alt='' className="w-full h-full object-cover" />
              </CarouselItem>
              <CarouselItem className="w-full">
                <Image src={DummyProduct} alt='' className="w-full h-full object-cover" />
              </CarouselItem>
              <CarouselItem className="w-full">
                <Image src={DummyProduct} alt='' className="w-full h-full object-cover" />
              </CarouselItem>
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white" />
            <CarouselNext className="absolute right-4  top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white" />
          </Carousel>
          <div className="w-full px-12">            
            <p className='text-xs font-light text-secondary-text mb-5 text-center'>{productData.smallDescription}</p>
            <div className="border-2 border-brand px-2 py-3 rounded-lg w-full my-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                  <SelectedIcon />
                  <p className='text-md text-E'>{productData.pack}</p>
                </div>
                ${productData.price}
              </div>
              <hr className='my-1'/>
              <p className='text-xs font-light text-secondary-text text-center'>{productData.typeSmallDescription}</p>
            </div>

            <Button className="w-full" size="lg" type="submit">
              {productData.buttonText}
            </Button>
            
            <div className="flex justify-start items-center gap-1">
              <p className='text-[10px] text-secondary-text font-extralight my-5'>100% Safe and Secure Payment Powered by</p>
              <Image src={PaddleLogo} alt='' width={80}/>
            </div>

            <p className=' text-E text-sm'>COMPATIBILITY</p>
            <div className="flex gap-4 my-3">
              {productData.compatibility.map((c,i)=>(
                <Image src={c === 'Illustrator' ? Illustrate : (c === 'After Effects' ? Effects : Slack)} alt={c} width={30} key={i} />
              ))}
            </div>

            <hr className='my-5' />
            
            <p className=' text-E text-sm'>Highlights: </p>
            <ul className='px-4'>
              {productData.highlights.map((h,i)=>(
                <li className='text-xs text-secondary-text my-2 list-disc' key={i}>{h}</li>
              ))}
            </ul>
            
            <div className="flex gap-5 my-7">
              <TipIcon />
              <div className="">
                <p className='text-xs font-light text-secondary-text my-1'>Can&apos;t find what you&apos;re looking for?</p>
                <p className='text-xs font-normal border-b-4 border-brand w-fit'>Reqest custom design</p>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="px-20">
        <h2 className='text-4xl my-5'>More Related Animation Pack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 w-full gap-6">
          {allProducts?.map((data, index) => (
            <>
            {data.productId!==productData.productId?
              <ProductComponent key={index} {...data} />:
              ""
            }
            </>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Page;
