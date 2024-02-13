"use client"
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
    return ( 
        <div className="flex items-center justify-center mt-2 w-16 h-16">
            <MotionLink href="/"
            whileHover={{
                scale:1.2
                }}>
            <div className="flex items-center">
                <Image
                    src="/Icons/leaugeIcon.png"
                    alt="Description of your image"
                    width={512}
                    height={512}
                />
                <h1 className="text-center text-black ml-2">Lolify</h1>
            </div>
                  
            </MotionLink>
        </div>
     );
}
 
export default Logo;