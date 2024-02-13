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
      className="w-1/2"
      initial={{ scale: 0 }}
      animate={{ rotate: shouldShake ? [-4, 4, -4, 0] : 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 10
      }}
    >
      <Link href="/soraka">
      <Image
        src="/animations/giphy.gif"
        alt="animacja"
        width={600}
        height={600}
        className="w-full h-auto transition hover:scale-105"
      />
      </Link>
    </motion.div>
  );
};

export default ShakingImage;
