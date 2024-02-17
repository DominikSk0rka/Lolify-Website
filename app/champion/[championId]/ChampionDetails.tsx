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
};

const ChampionDetails: React.FC<ChampionDetailsProps> = ({ champion }) => {
  const [cartProduct, setCartProduct] = useState<CartChampionType>({
    id: champion.id,
    name: champion.name,
    title: champion.title,
    description: champion.description,
  });

  return (
    <div>
      <h2 className="text-3xl font-medium text-slate-700">{champion.name}</h2>
      <h2 className="text-3xl font-medium text-slate-700">{champion.title}</h2>
      <h2 className="text-3xl font-medium text-slate-700">
        {champion.description}
      </h2>
      <div className="relative pb-6">
        <Image
          src={champion.image_link}
          alt={champion.name}
          width={1215}
          height={517}
          priority
        />
      </div>
    </div>
  );
};

export default ChampionDetails;
