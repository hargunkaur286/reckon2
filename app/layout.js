import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "./container/navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Include your navbar component */}
        {children}
        
      </body>
    </html>
  );
}
