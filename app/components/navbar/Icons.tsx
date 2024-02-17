import { motion } from "framer-motion";
import Image from "next/image";

export const Moon = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
    >
      <Image src="/Icons/moon.png" alt="Sun" width={30} height={30} />
    </motion.div>
  );
};

export const Sun = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
    >
      <Image src="/Icons/sun.png" alt="Sun" width={30} height={30} />
    </motion.div>
  );
};
