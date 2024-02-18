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
  title: string;
  description: string;
  roles: string;
  image_file: string;
  q_name: string;
  w_name: string;
  e_name: string;
  r_name: string;
  passive_name: string;
  q_image_file: string;
  w_image_file: string;
  e_image_file: string;
  r_image_file: string;
  passive_image_file: string;
  skin_1_image_file: string;
  skin_2_image_file: string;
  skin_3_image_file: string;
  skin_4_image_file: string;
}

const fetchChampionById = async (id: string): Promise<Champion | null> => {
  try {
    const response = await axios.get(
      `https://lolify.fly.dev/api/champion/${id}`
    );
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching champion data:", error);
    return null;
  }
};

const Champion = ({ params }: { params: IParams }) => {
  console.log("params", params);

  const [champion, setChampion] = useState<Champion | null>(null);

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
    <div className="">
      <Container>
        {champion && <ChampionDetails champion={champion} />}
      </Container>
    </div>
  );
};

export default Champion;
