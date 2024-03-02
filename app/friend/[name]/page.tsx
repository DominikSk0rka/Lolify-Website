"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container from "../../components/inputs/Container";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FavoriteCard from "../../profile/FavoriteCard";

import { useParams } from "next/navigation";
interface Champion {
  id: number;
  name: string;
}

const FriendClient = () => {
  const router = useRouter();
  const [champions, setChampions] = useState<Champion[]>([]);

  const [logs, setLogs] = useState<Log[]>([]);

  const params = useParams<{ name: string }>();

  type Log = {
    text: String;
    timestamp: String;
  };

  const [user, setUser] = useState<{
    name: string;
    email: string;
    logs: [];
  } | null>(null);
  useEffect(() => {
    const token = Cookies.get("token");

    axios
      .get(`https://lolify.fly.dev/api/profile/${params.name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        setLogs(userData.logs);
        setChampions(response.data.likes);
        setUser({
          name: userData.name,
          email: userData.email,
          logs: userData || [],
        });
        console.log("User Logs:", userData.logs);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          router.push("/");
          toast.error("You are not logged in :(");
        }
        if (error.response.status === 404) {
          router.push("/");
          toast.error("User not found :(");
        }
      });
  }, [params.name, router]);

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
            Logs:{" "}
            <ul>
              {logs.map((log: Log, index: number) => (
                <li key={index} className="flex justify-between">
                  <p>{log.text}</p>
                  <p>{log.timestamp}</p>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default FriendClient;
