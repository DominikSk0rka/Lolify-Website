"use state";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const ShakingImage = () => {
  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShouldShake(true);

      setTimeout(() => {
        setShouldShake(false);

        setTimeout(() => {
          setShouldShake(true);
        }, 300);

        setTimeout(() => {
          setShouldShake(false);
        }, 50);
      }, 100);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="w-1/2 md:w-full lg:w-3/4 xl:w-4/6 "
      initial={{ scale: 0 }}
      animate={{ rotate: shouldShake ? [-4, 4, -4, 0] : 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 10,
      }}
    >
      <Link href="/admin">
        <Image
          src="/animations/giphy.gif"
          alt="animacja"
          width={600}
          height={600}
          className="w-full h-auto lg:inline-block sm:inline-block sm:w-full xl:inline-block  md:inline-block md:w-full transition hover:scale-105"
        />
      </Link>
    </motion.div>
  );
};

export default ShakingImage;
