"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GoTrophy } from "react-icons/go";

interface Champion {
  id: number;
  name: string;
  image_link: string;
  users_count: string;
}

const ChampionCard: React.FC<{ champion: Champion; place: number }> = ({
  champion,
  place,
}) => {
  const router = useRouter();

  const cardColors =
    place === 1
      ? "bg-yellow-300 text-black"
      : place === 2
      ? "bg-gray-500 text-black"
      : place === 3
      ? "bg-yellow-700 text-black"
      : "";
  const placeDescription =
    place === 1
      ? "1st place"
      : place === 2
      ? "2nd place"
      : place === 3
      ? "3rd place"
      : null;
  const trophyColor =
    place === 1
      ? "text-yellow-300"
      : place === 2
      ? "text-gray-500"
      : place === 3
      ? "text-yellow-700"
      : "";

  return (
    <div
      onClick={() => router.push(`/champion/${champion.id}`)}
      className={`col-span-1 cursor-pointer rounded-b-xl border-[1.5px] border-dark dark:border-light dark:text-light transition hover:scale-105 text-center text-sm`}
    >
      <div className="flex flex-col">
        <div className="relative pb-6">
          <Image
            src={champion.image_link}
            alt={champion.name}
            width={1215}
            height={517}
            priority
          />
        </div>
        <div className="font-bold pb-2 text-2xl">{champion.name}</div>
        <div className="text-slate-700 dark:text-light pb-4 text-xl flex flex-row items-center justify-center gap-2">
          Total likes: {champion.users_count}
          <h1 className={trophyColor}>
            <GoTrophy size={40} />
          </h1>
        </div>
        <div
          className={`font-bold font-mono text-xl pb-4 pt-5 rounded-b-xl ${cardColors}`}
        >
          {placeDescription}
        </div>
      </div>
    </div>
  );
};

const Championstop = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get("https://lolify.fly.dev/api/top3/champion/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setChampions(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(champions);
  }, [champions]);

  const sortedChampions = champions
    .slice()
    .sort((a, b) => parseInt(b.users_count, 10) - parseInt(a.users_count, 10));

  return (
    <main className="dark:bg-dark p-8 w-full h-full">
      <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-1 xl-grid-cols-3 2xl:grid-cols-3 gap-8 dark:bg-dark">
        {sortedChampions.map((champion, index) => (
          <ChampionCard
            key={champion.id}
            champion={champion}
            place={index + 1}
          />
        ))}
      </div>
    </main>
  );
};

export default Championstop;
