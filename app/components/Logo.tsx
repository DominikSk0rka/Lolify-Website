"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 w-16 h-16 ">
      <MotionLink
        href="/"
        whileHover={{
          scale: 1.2,
        }}
        className="flex items-center "
      >
        <div className="flex items-center">
          <div className="sm:hidden md:hidden lg:hidden flex items-center">
            <Image
              src="/Icons/leaugeIcon.png"
              alt="Logo"
              width={512}
              height={512}
              className="mr-2"
            />
            <h1 className="text-black dark:text-light font-bold text-right">
              Lolify
            </h1>
          </div>
          <div className="hidden sm:flex md:flex lg:flex font-bold text-3xl">
            <h1 className=" text-black dark:text-light">Lolify</h1>
          </div>
        </div>
      </MotionLink>
    </div>
  );
};

export default Logo;
