import Link from "next/link";
import Logo from "./Logo";
import { heartIcon } from "./Icons";
import MenuItems from "./inputs/MenuItems";

const NavBar = () => {
    return ( 
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-white"> 
        <nav>
            <Link href="/" className="mr-4">Home</Link>
            <Link href="/champions" className="mx-4">Champions</Link>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
        </div>

        <nav className="px-8 flex flex-row">
            <Link href="/favorite">
                {heartIcon({})}
            </Link>
            <MenuItems />
        </nav>
        
     </header> );
}
 
export default NavBar;