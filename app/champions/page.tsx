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
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    let apiUrl = "https://lolify.fly.dev/api/champion/";

    if (selectedRole !== null) {
      apiUrl = `https://lolify.fly.dev/api/champion/role/${selectedRole}`;
    }

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setChampions(response.data);
      });
  }, [selectedRole]);

  useEffect(() => {
    console.log(champions);
  }, [champions]);

  const shuffledchampions = champions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleRoleButtonClick = (role: number | null) => {
    setSelectedRole(role);
  };

  return (
    <div className="w-full h-full dark:bg-dark">
      <div className="dark:bg-dark p-8  ">
        <div>
          <h2 className="text-center text-slate-700 text-2xl pb-5 dark:text-light">
            Search for hero by role:
          </h2>
          <div className="dark:text-light flex flex-row justify-center items-center gap-2 pb-5 flex-wrap">
            <button
              onClick={() => handleRoleButtonClick(null)}
              className="flex items-center bg-dark text-light p-2.5 px-4 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
            >
              ALL
            </button>
            <button
              onClick={() => handleRoleButtonClick(1)}
              className="flex items-center bg-dark text-light p-2.5 px-4 md:px-2  rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
            >
              TOP
            </button>
            <button
              onClick={() => handleRoleButtonClick(2)}
              className="flex items-center bg-dark text-light p-2.5 px-4 md:px-2  rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
            >
              JUNGLE
            </button>
            <button
              onClick={() => handleRoleButtonClick(3)}
              className="flex items-center bg-dark text-light p-2.5 px-4 md:px-2  rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
            >
              MID
            </button>
            <button
              onClick={() => handleRoleButtonClick(4)}
              className="flex items-center bg-dark text-light p-2.5 px-4 md:px-2  rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
            >
              ADC
            </button>
            <button
              onClick={() => handleRoleButtonClick(5)}
              className="flex items-center bg-dark text-light p-2.5 px-4 md:px-2 rounded-lg text-lg font-semibold transition hover:scale-105 dark:bg-light dark:text-dark"
            >
              SUPPORT
            </button>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 xl-grid-cols-3 2xl:grid-cols-3 gap-8 dark:bg-dark">
            {shuffledchampions.map((champion) => (
              <ChampionCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
