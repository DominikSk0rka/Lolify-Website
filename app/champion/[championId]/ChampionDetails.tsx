"use client";

import Image from "next/image";
import { useState } from "react";

interface ChampionDetailsProps {
  champion: any;
}

export type CartChampionType = {
  id: string;
  name: string;
  title: string;
  description: string;
  q_name: string;
  w_name: string;
  e_name: string;
  r_name: string;
  passive_name: string;
};

const ChampionDetails: React.FC<ChampionDetailsProps> = ({ champion }) => {
  const [cartProduct, setCartProduct] = useState<CartChampionType>({
    id: champion.id,
    name: champion.name,
    title: champion.title,
    description: champion.description,
    q_name: champion.q_name,
    w_name: champion.w_name,
    e_name: champion.e_name,
    r_name: champion.r_name,
    passive_name: champion.passive_name,
  });

  return (
    <div>
      <h2 className="text-3xl font-medium text-slate-700">{champion.name}</h2>
      <h2 className="text-3xl font-medium text-slate-700">{champion.title}</h2>
      <h2 className="text-3xl font-medium text-slate-700">
        {champion.description}
      </h2>

      <p>{champion.skills[0].name}</p>
      <p>{champion.skills[1].name}</p>
      <p>{champion.skills[2].name}</p>
      <p>{champion.skills[3].name}</p>
      <p>{champion.skills[4].name}</p>
      <div className="relative pb-6">
        <Image
          src={champion.skills[0].image_link}
          alt={champion.name}
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="relative pb-6">
        <Image
          src={champion.skins[0].image_link}
          alt={champion.name}
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="relative pb-6">
        <Image
          src={champion.image_link}
          alt={champion.name}
          width={1215}
          height={517}
          priority
        />
      </div>
      {champion.likes_count}
      {/*POST
      https://lolify.fly.dev/api/champion/like/`${champion.id}` 
      https://lolify.fly.dev/api/champion/dislike/`${champion.id}`
      w dislike po prostu usuwam like zwykle usuwanie
      
      if jesli postac nie ma wszystkich 4 skinow tlyko 4
      
      */}
    </div>
  );
};

export default ChampionDetails;
