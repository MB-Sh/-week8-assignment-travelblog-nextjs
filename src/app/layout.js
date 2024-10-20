import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Travel blog!",
  description: "Travel and Share your experiences",
  //we use openGraph for social media integrations
  openGraph: {
    title: "Travel blog!",
    description:
     "Travel and Share your experiences",
    type: "website",
    url: "#",
    images: [
      "https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_640.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
