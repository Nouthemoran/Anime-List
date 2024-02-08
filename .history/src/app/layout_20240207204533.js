import {  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const  = ({ subsets: ["latin"] });

export const metadata = {
  title: "Man Anime List",
  description: "animelist indonesian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${.className} bg-color-dark`}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
