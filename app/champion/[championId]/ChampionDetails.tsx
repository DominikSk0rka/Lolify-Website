"use client";

import Button from "@/app/components/inputs/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ChampionDetailsProps {
  champion: any;
}

export type FavChampionType = {
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
  const router = useRouter();
  const Horizontal = () => {
    return <hr className="w-[30% mt-5 mb-5] border border-slate-300" />;
  };

  const [isChampionInFav, setisChampionInFav] = useState(false);
  const [FavChampion, setFavChampion] = useState<FavChampionType>({
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
    <div className="p-8 grid grid-cols-2 lg:grid-cols-1 gap-12">
      <div className="relative">
        <Image
          src={champion.image_link}
          alt={champion.name}
          width={1215}
          height={517}
          priority
        />
      </div>
      <div>
        <h2 className="text-3xl font-medium text-slate-700 dark:text-white">
          {champion.name}
        </h2>
        <h2 className="text-3xl font-medium text-slate-700 dark:text-white">
          {champion.title}
        </h2>
        <h2 className="text-justify dark:text-light">{champion.description}</h2>
        <div className="flex pt-5 gap-2 text-2xl dark:text-light">
          <p className="font-medium text-slate-700 dark:text-light">Likes: </p>
          <p>{champion.likes_count}</p>
        </div>
        <button></button>
      </div>

      {/* skile---------------------------------------*/}
      <div className="dark:text-light">
        <div className="relative ">
          <p className="font-bold text-3xl font-mono pb-2">Q</p>
          <p>{champion.skills[0].name}</p>
          <Image
            src={champion.skills[0].image_link}
            alt={champion.name}
            width={64}
            height={64}
            priority
          />
        </div>
        <Horizontal />
        <div className="relative">
          <p className="font-bold text-3xl font-mono pb-2">W</p>
          <p>{champion.skills[1].name}</p>
          <Image
            src={champion.skills[1].image_link}
            alt={champion.name}
            width={64}
            height={64}
            priority
          />
        </div>
        <Horizontal />
        <div className="relative">
          <p className="font-bold text-3xl font-mono pb-2">E</p>
          <p>{champion.skills[2].name}</p>
          <Image
            src={champion.skills[2].image_link}
            alt={champion.name}
            width={64}
            height={64}
            priority
          />
        </div>
        <Horizontal />
        <div className="relative">
          <p className="font-bold text-3xl font-mono pb-2">R</p>
          <p>{champion.skills[3].name}</p>
          <Image
            src={champion.skills[3].image_link}
            alt={champion.name}
            width={64}
            height={64}
            priority
          />
        </div>
        <Horizontal />
        <div className="relative pb-5">
          <p className="font-bold text-3xl font-mono pb-2">Passive</p>
          <p>{champion.skills[4].name}</p>
          <Image
            src={champion.skills[4].image_link}
            alt={champion.name}
            width={64}
            height={64}
            priority
          />
        </div>
      </div>

      {/*Skin*/}

      <div className="grid grid-2 relative  font-medium text-slate-700 dark:text-white">
        <p className="font-bold text-3xl font-mono pb-2">Skins</p>
        <div className="transition hover:scale-105">
          {champion.skins[0]?.image_link && (
            <Image
              src={champion.skins[0].image_link}
              alt={champion.name}
              width={300}
              height={300}
            />
          )}
        </div>
        <div className="transition hover:scale-105">
          {champion.skins[1]?.image_link && (
            <Image
              src={champion.skins[1].image_link}
              alt={champion.name}
              width={300}
              height={300}
            />
          )}
        </div>

        <div className="transition hover:scale-105">
          {champion.skins[2]?.image_link && (
            <Image
              src={champion.skins[2].image_link}
              alt={champion.name}
              width={300}
              height={300}
            />
          )}
        </div>
        <div className="transition hover:scale-105">
          {champion.skins[3]?.image_link && (
            <Image
              src={champion.skins[3].image_link}
              alt={champion.name}
              width={300}
              height={300}
            />
          )}
        </div>
      </div>

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
