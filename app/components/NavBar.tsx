"use client";
import Link from "next/link";
import Logo from "./Logo";
import { heartIcon } from "./Icons";
import MenuItems from "./inputs/MenuItems";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { LuMoon } from "react-icons/lu";
import { BsSun } from "react-icons/bs";

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-white dark:bg-dark/90 dark:text-light">
      <nav>
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/champions" className="mx-4">
          Champions
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <nav className="px-8 flex flex-row">
        <Link href="/favorite">{heartIcon({})}</Link>
        <MenuItems />

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1 "
        >
          {mode === "dark" ? <LuMoon size={30} /> : <BsSun size={30} />}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
