
import Link from "next/link";
import AboutPage from "@/app/pages/about/page";
import TravelPage from "@/app/pages/travelblog/page";

export default function Navbar(){
    return(
      <>
      <nav className="nav-bar">
        <Link href={"/"}>Home</Link> |
        <Link href={"/about"}>About</Link> |
        <Link href={"/travelblog"}>Travel Blog</Link>
      </nav>
      </>
    );
  }