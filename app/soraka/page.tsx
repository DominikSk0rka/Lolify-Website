import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

const soraka = () => {
    return ( 
    <Container>
    <main className="flex flex-row p-16">
    <div>
        <Image
        src="/animations/bard.gif"
        alt="animacja"
        width={600}
        height={600}
        className="w-auto h-auto transition hover:scale-105"
          />
    </div> 
    <div className="flex items-center self-start mt-40 gap-2">
                <Link
                href="/"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
                >
                Go back
                </Link>
          </div>
    </main>
    </Container>
    );
}
 
export default soraka;