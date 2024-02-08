import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"] });

export const metadata = {
  title: "Man Anime List",
  description: "animelist indonesian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`poppins.className`}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
