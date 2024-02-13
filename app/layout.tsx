import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont",})

export const metadata: Metadata = {
  title: "Lolify",
  description: "Lolify website for league of legends players",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <main>
        <NavBar />
       {children}
        <Footer />
      </main>
      </body>
    </html>
  );
}
