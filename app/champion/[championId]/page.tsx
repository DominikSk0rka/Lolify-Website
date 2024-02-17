"use client";
import Container from "@/app/components/inputs/Container";
import ChampionDetails from "./ChampionDetails";
import { useEffect, useState } from "react";
import axios from "axios";

interface IParams {
  championId?: string;
}
interface Champion {
  id: number;
  name: string;
  roles: string;
  image_file: string;
}

const fetchChampionById = async (id: string): Promise<Champion | null> => {
  try {
    const response = await axios.get(
      `https://lolify.fly.dev/api/champion/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching champion data:", error);
    return null;
  }
};

const Champion = ({ params }: { params: IParams }) => {
  console.log("params", params);

  // Use state to store the champion data
  const [champion, setChampion] = useState<Champion | null>(null);

  // Fetch champion data when the component mounts
  useEffect(() => {
    const fetchChampionData = async () => {
      if (params.championId) {
        const data = await fetchChampionById(params.championId);
        setChampion(data);
      }
    };

    fetchChampionData();
  }, [params.championId]);

  return (
    <div className="p-8">
      <Container>
        {/* Render ChampionDetails with the fetched champion data */}
        {champion && <ChampionDetails champion={champion} />}
      </Container>
    </div>
  );
};

export default Champion;
