"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

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
    <div>
      {champions.map((champion) => (
        <div key={champion.id}>
          <h2>{champion.name}</h2>
          <img src={champion.image_link} alt={champion.name} />
        </div>
      ))}
    </div>
  );
};

export default Champions;
