"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container from "../components/inputs/Container";
import FavoriteCard from "./FavoriteCard";

interface Champion {
  id: number;
  name: string;
}

const FavoriteClient = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get("https://lolify.fly.dev/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setChampions(response.data.likes);
      });
  }, []);

  useEffect(() => {
    console.log(champions);
  }, [champions]);

  const shuffledchampions = champions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="w-full h-full dark:bg-dark">
      <Container className="p-4 xl:p-8 sm:p-4 ">
        <main className="dark:bg-dark ">
          <div>
            <div className="text-center text-3xl font-bold pt-10 dark:text-light pb-10">
              Favorites
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 xl-grid-cols-3 2xl:grid-cols-3 gap-8 ">
              {shuffledchampions.map((champion) => (
                <FavoriteCard key={champion.id} champion={champion} />
              ))}
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default FavoriteClient;
