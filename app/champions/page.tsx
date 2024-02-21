"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ChampionCard from "./ChampionCard";

interface Champion {
  id: number;
  name: string;
}

const Champions = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get("https://lolify.fly.dev/api/champion/", {
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

  const shuffledchampions = champions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <main className="dark:bg-dark p-8 w-full h-full">
      <div className="dark:text-light flex flex-row justify-center items-center gap-2">
        <button>ALL</button>
        <button>JUNGLE</button>
        <button>MID</button>
        <button>ADC</button>
        <button>SUPPORT</button>
      </div>
      <div className="text-center text-3xl font-bold pt-10 dark:text-light pb-10">
        Champions{" "}
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 xl-grid-cols-3 2xl:grid-cols-3 gap-8 dark:bg-dark">
        {shuffledchampions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </main>
  );
};

export default Champions;
