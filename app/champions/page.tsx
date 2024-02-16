"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ChampionCard from "../components/championsDisplay/ChampionCard";
import Container from "../components/inputs/Container";
import AnimatedText from "../components/animations/AnimatedText";

interface Champion {
  id: number;
  name: string;
}

const Champions = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get("https://lolify.fly.dev/api/champion", {
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
    <main className="dark:bg-dark ">
      <AnimatedText text="Champions" className="text-center" />
      <Container className="p-16 xl:p-16">
        <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 xl-grid-cols-3 2xl:grid-cols-3 gap-8">
          {shuffledchampions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Champions;
