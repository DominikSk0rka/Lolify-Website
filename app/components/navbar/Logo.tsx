"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 w-16 h-16">
      <div>
        <div className="flex items-center">
          <div className="sm:hidden md:hidden lg:hidden">
            <SearchBar />
          </div>
          <MotionLink
            className="hidden sm:flex md:flex lg:flex font-bold text-3xl pt-4"
            href="/"
            whileHover={{
              scale: 1.2,
            }}
          >
            <h1 className=" text-black dark:text-light">Lolify</h1>
          </MotionLink>
        </div>
      </div>
    </div>
  );
};

export default Logo;
