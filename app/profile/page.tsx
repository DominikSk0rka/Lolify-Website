"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container from "../components/inputs/Container";
import FavoriteCard from "./FavoriteCard";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Champion {
  id: number;
  name: string;
}

const FavoriteClient = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  const params = useParams<{ name: string }>();

  type Log = {
    text: String;
    timestamp: string | number | Date;
  };

  const router = useRouter();
  const [champions, setChampions] = useState<Champion[]>([]);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    logs: [];
  } | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      toast.error("You have to be logged in to search other users");
      router.push("/");
      return;
    }

    axios
      .get("https://lolify.wheelwallet.cloud/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        setChampions(response.data.likes);
        setUser({
          name: userData.name,
          email: userData.email,
          logs: userData || [],
        });
        setLogs(response.data.logs);
        console.log("User Logs:", userData.logs);
      });
  }, []);

  useEffect(() => {}, [champions]);

  const shuffledchampions = champions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  return (
    <div className="w-full h-full dark:bg-dark">
      <main className="dark:bg-dark p-8">
        <div className="dark:text-light">
          <h1 className="text-3xl dark:text-light font-bold">Profile</h1>
          <div className="flex flex-row gap-2">
            <p className="font-bold">Summoner:</p>
            <p>{user?.name}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-bold">E-mail:</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold pt-10 dark:text-light pb-10">
            Favorites
          </h1>
          <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-2 xl-grid-cols-3 2xl:grid-cols-3 gap-8 ">
            {shuffledchampions.map((champion) => (
              <FavoriteCard key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
        <div className="pt-5 dark:text-light">
          <hr className="my-2 border-t-2 border-dark/20 dark:border-light" />
          <h1 className="font-bold text-xl pb-4"> Logs:</h1>
          <ul>
            {sortedLogs.map((log: Log, index: number) => (
              <div key={index}>
                <li className="flex justify-between">
                  <p>{log.text}</p>
                  <p>{new Date(String(log.timestamp)).toLocaleString()}</p>
                </li>
                {index < sortedLogs.length - 1 && <hr />}
              </div>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default FavoriteClient;
