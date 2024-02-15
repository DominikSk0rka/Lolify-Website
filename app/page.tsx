"use client";
import Container from "./components/inputs/Container";
import AnimatedText from "./components/animations/AnimatedText";
import Link from "next/link";
import ShakingImage from "./components/Image";
import SelfWritingText from "./components/animations/SelfWritingText";

export default function Home() {
  return (
    <main className="flex items-start text-dark w-full min-h-screen">
      <Container className="p-0">
        <div className="flex items-center justify-between w-full ">
          <ShakingImage />

          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Champions in League" className="pb-3" />
            <p className="mt-2 font-medium self-start text-start  dark:text-light">
              Greetings, summoners! I&apos;m Soraka, and I&apos;m here to guide
              you through the intricate world of League of Legends. Whether
              you&apos;re planning your next build or seeking insights into the
              diverse array of champions, this is the hub where your League of
              Legends journey takes a decisive turn.
            </p>

            <div className="flex items-center self-start mt-4 gap-2 xl:self-start">
              <Link
                href="/champions"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
              >
                Go to champions
              </Link>
            </div>
          </div>
        </div>
        <SelfWritingText />
      </Container>
    </main>
  );
}
