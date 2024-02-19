"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container2 from "../components/inputs/Container2";
import Image from "next/image";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="dark:text-light dark:bg-dark text-center">
        <div className="text-6xl pt-10 font-bold font-mono">Admin Panel</div>
        <div className="mx-auto mt-5">
          <Image
            src="/animations/gif2gif.gif"
            alt="animacja"
            width={600}
            height={600}
            className="transition hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
