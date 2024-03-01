"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container from "../components/inputs/Container";
import FavoriteCard from "./FavoriteCard";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Champion {
  id: number;
  name: string;
}

const FavoriteClient = () => {
  const router = useRouter();
  const [champions, setChampions] = useState<Champion[]>([]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      toast.error("You have to be log in to search other users");
      router.push("/");
      return;
    }

    axios
      .get("https://lolify.fly.dev/api/me", {
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
        });
      });
  }, []);

  useEffect(() => {}, [champions]);

  const shuffledchampions = champions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="w-full h-full dark:bg-dark">
      <Container className="p-4 xl:p-8 sm:p-4 ">
        <main className="dark:bg-dark ">
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
            <hr className="my-4 border-t-2 border-dark/70 dark:border-light" />
            Logs:
          </div>
        </main>
      </Container>
    </div>
  );
};

export default FavoriteClient;
