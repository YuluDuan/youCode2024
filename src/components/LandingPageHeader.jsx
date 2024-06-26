import Link from "next/link";
import Image from "next/image";
import { days_one } from "@/app/font";
import {auth, signIn, signOut} from "../../auth";
import SignOut from "./SignOut";


const LandingPageHeader = async () => {
  const session =  await auth();
  return (
    <nav
    className={`flex justify-between py-2 pb-2 px-12 items-center border-b border-gray-100 fixed top-0 left-0 right-0 bg-white z-50`}
  >
    <div
      className={`flex gap-2 items-center text-2xl leading-normal orange_gradient cursor-default ${days_one.className} gap-5`}
    >
      <Image src={"/assets/dog.png"} height={120} width={120} alt="Logo" />
      {"DOG'TERYX"}
    </div>

    <div className="hidden lg:flex gap-x-14 leading-5 py-3 text-base font-medium">
      <Link href="/">Explore</Link>
      <Link href="/posts/new">Post</Link>
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
  );
};

export default LandingPageHeader;
