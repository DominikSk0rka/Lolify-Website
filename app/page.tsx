"use client";
import Container from "./components/inputs/Container";
import AnimatedText from "./components/animations/AnimatedText";
import Link from "next/link";
import ShakingImage from "./components/Image";
import SelfWritingText from "./components/animations/SelfWritingText";
import Championstop from "./components/top";

export default function Home() {
  return (
    <main className="flex items-center text-dark dark:bg-dark  dark:text-light">
      <div className="w-full">
        <Container className="pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0">
          <div className="flex items-center justify-between w-full xl:flex-col">
            <ShakingImage />

            <div className="w-1/2 flex flex-col items-center self-center xl:w-full xl:text-start">
              <AnimatedText
                text="Champions in League"
                className="pb-3 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl"
              />
              <p className="mt-2 font-medium self-start md:!self-center xl:!text-center text-start">
                Greetings, summoners! I&apos;m Soraka, and I&apos;m here to
                guide you through the intricate world of League of Legends.
                Whether you&apos;re planning your next build or seeking insights
                into the diverse array of champions, this is the hub where your
                League of Legends journey takes a decisive turn.
              </p>

              <div className="flex items-center self-start mt-4 gap-2 xl:self-center sm:pt-3 sm:pb-5 md:pb-8 lg:pb-10 xl:pb-16">
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
          <div className="text-center text-3xl font-bold pt-10">
            Top Champions
          </div>
          <Championstop />
        </Container>
      </div>
    </main>
  );
}
