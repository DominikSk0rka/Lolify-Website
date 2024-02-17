"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ChampionCardProps {
  champion: any;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/champion/${champion.id}`)}
      className="col-span-1 cursor-pointer rounded-b-xl border-[1.5px] border-dark bg-light dark:border-light dark:text-light dark:bg-dark/70 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col">
        <div className="relative pb-6">
          <Image
            src={champion.image_link}
            alt={champion.name}
            width={1215}
            height={517}
            priority
          />
        </div>
        <div className="font-bold pb-8">{champion.name}</div>
      </div>
    </div>
  );
};

export default ChampionCard;
