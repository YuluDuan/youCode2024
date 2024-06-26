"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

import Image from "next/image";

export default function Login(){
  return (

    <div className="flex flex-row">
    <div className="w-1/2 h-screen flex flex-col justify-center items-center px-12">
      <Image  
          src="/assets/dog-text.png"
          height={250}
          width={250}
          alt="logo"/>
      <p className="pt-[180px]">
        Outfit Connect: the ultimate app for outdoor enthusiasts! Snap and share your adventure outfits, and there will be a link to each item for easy shopping. Connect with fellow adventurers, inspire each other, and elevate your outdoor style. Gear up and explore like never before with Outfit Connect!
      </p>
          
    </div>
  
   <div className="w-1/2 h-screen flex items-center justify-center bg-img relative">
   <Image className="background" src="/assets/bg-image.jpg" alt="Background Image" height={100} width={100}/>


      <div className="flex flex-col gap-5 w-full px-12 items-center">
        <h1 className="text-xl font-bold text-center text-white">
        Create an account
        </h1>
        <p className="text-center pb-10 text-white">
         Signin with your Google account
        </p>

      <Button
        size="lg"
        className="w-1/2"
        variant="outline"
        onClick={() => signIn("google", {callbackUrl: '/'})}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>

    
      
    </div>
    </div>
  </div>
  
  )
}
