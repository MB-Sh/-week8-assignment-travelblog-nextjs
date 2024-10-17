
import Link from "next/link";
import AboutPage from "@/app/about/page";
import TravelPage from "@/app/travelpost/page";
import NewTravelPost from "@/app/newTravelpost/page";

export default function Navbar(){
    return(
      <>
      <nav className="bg-slate-400 p-4 sticky top-0 drop-shadow-xl z-0 text-cyan-50 flex
      gap-5 justify-end " >
        <Link href={"/"}>Home</Link> |
        <Link href={"/about"}>About</Link> |
        <Link href={"/travelpost"}>Travel Post</Link> |
        <Link href={"/addtravelpost"}>Add Travel Post</Link>
      </nav>
      </>
    );
  }