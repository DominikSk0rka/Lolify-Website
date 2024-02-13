import Link from "next/link";
import Container from "./Container";

const Footer = () => {
    return ( 
        <footer className="w-full font-medium text-lg">
        <Container className="!py-10 flex items-center justify-between !bg-white">
            <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
            <Link href="/" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105">Back</Link>    
        </Container>    
        </footer>
 );
}
 
export default Footer;