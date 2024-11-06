'use client';
import Lottie from "lottie-react";
import HeaderAnimation from "@/assets/animations/home-page-top-animation.json"

export const HomePageAnimation=()=>{
    return(
        <div className="w-full -translate-y-20">
            <Lottie animationData={HeaderAnimation} loop={true}/>
        </div>
    )
}