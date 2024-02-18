"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Container from "./inputs/Container";
import AnimatedText from "./animations/AnimatedText";

const NullData = () => {
  return (
    <div>
      <div className="flex text-dark w-full min-h-screen dark:text-light xl:hidden">
        <Container className="p-0">
          <AnimatedText text="Oops..." className=" text-center" />

          <div className="flex items-center justify-between w-full ">
            <Image
              src="/animations/bard.gif"
              alt="animacja"
              width={600}
              height={600}
              className="w-auto h-auto"
            />

            <div className="w-1/2 flex flex-col items-center">
              <p className="mt-2 font-medium self-start text-start">
                <TypeAnimation
                  sequence={[
                    "Bard guards this page. You have no access. Try again, summoner!",
                    3000,
                    "Bard guards this page. You have no access. If you want to challenge me come back stronger with admin account :P",
                  ]}
                  wrapper="span"
                  speed={40}
                  style={{ fontSize: "2em", display: "inline-block" }}
                />
              </p>
              <div className="flex mt-8 gap-2 self-start">
                <Link
                  href="/"
                  className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
                >
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="flex-col text-dark w-gull  dark:text-light hidden xl:flex pt-10">
        <AnimatedText text="Oops..." className="!text-2xl " />
        <p className="mt-2 font-medium self-start text-start xl:!text-center">
          <TypeAnimation
            sequence={[
              "Bard guards this page. You have no access. Try again, summoner!",
              3000,
              "Bard guards this page. You have no access. If you want to challenge me come back stronger with admin account :P",
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </p>
        <div className="flex mt-8 gap-2 self-center">
          <Link
            href="/"
            className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
          >
            Go back
          </Link>
        </div>
        <Image
          src="/animations/bard.gif"
          alt="animacja"
          width={600}
          height={600}
          className="w-30 h-30"
        />
      </div>
    </div>
  );
};

export default NullData;
