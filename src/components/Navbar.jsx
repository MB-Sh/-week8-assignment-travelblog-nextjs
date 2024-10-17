
import Link from "next/link";
import AboutPage from "@/app/about/page";
import TravelPage from "@/app/travelpost/page";

export default function Navbar(){
    return(
      <>
      <nav className="nav-bar">
        <Link href={"/"}>Home</Link> |
        <Link href={"/about"}>About</Link> |
        <Link href={"/travelpost"}>Travel Post</Link>
      </nav>
      </>
    );
  }