import Link from "next/link";
import Container from "./inputs/Container";

const Footer = () => {
  return (
    <footer className="w-full static font-medium text-lg dark:bg-dark pt-10">
      <Container className="!py-10 p-32 flex items-center justify-between dark:bg-dark/90 dark:text-light">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <Link
          href="/"
          className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
        >
          Back
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
