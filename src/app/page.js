import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { days_one } from "@/app/font";
import {auth, signIn, signOut} from "../../auth";


export default async function LandingPage () {
  const session =  await auth();
  return (
    <section className="flex flex-col">
      <nav
      className={`flex justify-between py-5 pb-2 px-12 items-center border-b border-gray-100 fixed top-0 left-0 right-0 bg-white z-50`}
    >
      <div
        className={`flex gap-2 items-center text-2xl leading-normal orange_gradient cursor-default ${days_one.className} gap-5`}
      >
        <Image src={"/assets/dog.png"} height={120} width={120} alt="Logo" />
        DOG'TERXY
      </div>

      <div className="hidden lg:flex gap-x-14 leading-5 py-3 text-base font-medium">
        <Link href="/">Explore</Link>
        <Link href="/">Community</Link>
        <Link href="/">About</Link>
      </div>


      <div className="hidden lg:flex gap-x-8 items-center font-medium">

      {
      session?.user ? (
        <><div>{session.user.name}</div><SignOut /></>
      ):(
        <Link href="/login">Login</Link>
      )
     }
        
        
      </div>
    </nav>
    </section>
  );
};


const SignOut = () =>{
  return (
    <form action={async() => {
      "use server"
      await signOut()
    }}>

       <Button className="purple_gradient">
         SignOut
        </Button>   

    </form>
  )
}


