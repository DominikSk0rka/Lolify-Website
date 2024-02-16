"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ChampionCard from "../components/championsDisplay/ChampionCard";
import Container from "../components/inputs/Container";

const Champions = () => {
  const [champions, setChampions] = useState([]);

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

  return (
    <Container>
      <div>
        {champions.map((champion) => (
          <ChampionCard key={champion} champion={champion} />
        ))}
      </div>
    </Container>
  );
};

export default Champions;
