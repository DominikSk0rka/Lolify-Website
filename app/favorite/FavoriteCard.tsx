"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiHeart } from "react-icons/ci";

interface ChampionCardProps {
  champion: any;
}

const FavoriteCard: React.FC<ChampionCardProps> = ({ champion }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/champion/${champion.id}`)}
      className="col-span-1 cursor-pointer rounded-b-xl border-[1.5px] border-dark bg-light dark:border-light dark:text-light dark:bg-dark/70 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center">
        <div className="relative pb-6">
          <Image
            src={champion.image_link}
            alt={champion.name}
            width={1215}
            height={517}
            priority
          />
        </div>
        <div className="text-4xl text-rose-500 bg-rose-300 rounded-xl">
          <CiHeart />
        </div>
        <div className="font-bold pb-8 pt-5 text-2xl ">{champion.name}</div>
      </div>
    </div>
  );
};

export default FavoriteCard;
