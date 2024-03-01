"use client";
import Link, { LinkProps } from "next/link";
import Logo from "./Logo";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import Cookies from "js-cookie";
import { Moon, Sun } from "./Icons";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { FaUserCircle } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";

interface CustomLinkProps extends LinkProps {
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
}) => {
  return (
    <Link href={href} className={`${className} relative group inline-block`}>
      <motion.nav whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
        {title}
      </motion.nav>
    </Link>
  );
};

interface CustomMobileLinkProps extends LinkProps {
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <Link
      href={href}
      className={`${className} relative group inline-block`}
      onClick={handleClick}
    >
      <motion.nav whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
        {title}
      </motion.nav>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenxl, setIsOpenxl] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpenxl((prev) => !prev);
  }, []);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header className="w-full px-16 py-8 font-medium flex items-center justify-between bg-white dark:bg-dark/90 dark:text-light">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/champions" title="Champions" className="mx-4" />
        </nav>

        {/*-----------------------------------------------------------------------------*/}
        <nav className="px-2 flex flex-row items-center gap-5">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="flex items-center justify-center rounded-full w-10 transition hover:scale-110"
          >
            {mode === "dark" ? <Moon /> : <Sun />}
          </button>

          <div className="relative z-30">
            <div
              onClick={toggleOpen}
              className="
                  flex
                  flex-row
                  cursor-pointer
                  transition
                  dark:text-light
                text-slate-900
                  "
            >
              <RiUser3Line size={40} />
            </div>
            {isOpenxl && (
              <div
                className="absolute
               rounded-mb
               shadow-mb
               w-[170px]
               bg-white
               dark:text-dark
               overflow-hidden
               right-0
               top-12
               text-sm
               flex
               flex-col
               curser-pointer"
              >
                {isLoggedIn ? (
                  <div>
                    <Link href="/profile">
                      <MenuItem onClick={toggleOpen}>Profile</MenuItem>
                    </Link>
                    <hr />
                    <MenuItem
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <Link href="/login">
                      <MenuItem onClick={toggleOpen}>Login</MenuItem>
                    </Link>
                    <hr />
                    <Link href="/register">
                      <MenuItem onClick={toggleOpen}>Register</MenuItem>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
        {/*-----------------------------------------------------------------------------*/}
      </div>

      {isOpen ? (
        <motion.div
          className="min-w-[60vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 dark:text-black text-white rounded-lg backdrop-blur-md py-16"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center flex-col justify-center gap-4 text-xl">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/champions"
              title="Champions"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-5">
            {isLoggedIn && (
              <div className="transition hover:scale-150">
                <Link href="/profile">
                  <RiUser3Line size={40} />
                </Link>
              </div>
            )}

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="ml-3 flex items-center justify-center rounded-full p-1 transition hover:scale-110"
            >
              {mode === "dark" ? <Moon /> : <Sun />}
            </button>
          </nav>

          <div className="pt-8">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center border-white border-[1px] dark:border-black  text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:text-dark"
              >
                Logout
              </button>
            ) : (
              <CustomMobileLink
                href="/login"
                title="Login"
                className="mx-4 border-white border-[1px] dark:border-black  text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:text-dark"
                toggle={handleClick}
              />
            )}
          </div>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] lg:top-0 top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
