"use client";

import Image from "next/image";

interface ChampionCardProps {
  champion: any;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  return (
    <div className="col-span-1 cursor-pointer rounded-lg border-[1.2px] border-dark bg-light dark:border-light dark:text-light dark:bg-dark/70 p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={champion.image_link}
            alt={champion.name}
            layout="fill"
            objectFit="contain"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="font-bold">{champion.name}</div>
    </div>
  );
};

export default ChampionCard;
