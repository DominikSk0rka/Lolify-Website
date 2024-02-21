"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ChampionDetailsProps {
  champion: any;
}
interface RoleType {
  name: string;
}
export type FavChampionType = {
  id: string;
  name: string;
  title: string;
  description: string;
  roles: [];
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

  const [] = useState<FavChampionType>({
    id: champion.id,
    name: champion.name,
    title: champion.title,
    roles: champion.roles,
    description: champion.description,
    q_name: champion.q_name,
    w_name: champion.w_name,
    e_name: champion.e_name,
    r_name: champion.r_name,
    passive_name: champion.passive_name,
  });

  const [likeCount, setLikeCount] = useState(champion.likes_count);
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );
  useEffect(() => {
    const likedStatus = Cookies.get(`liked_${champion.id}`);
    setHasLiked(likedStatus === "true");
  }, [champion.id]);
  const [hasLiked, setHasLiked] = useState(false);
  const handleLikeClick = async () => {
    try {
      const token = Cookies.get("token");

      const apiEndpoint = hasLiked
        ? `https://lolify.fly.dev/api/champion/dislike/${champion.id}`
        : `https://lolify.fly.dev/api/champion/like/${champion.id}`;

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setLikeCount(hasLiked ? likeCount - 1 : likeCount + 1);
        setHasLiked(!hasLiked);
        Cookies.set(`liked_${champion.id}`, String(!hasLiked));
        router.refresh;
      } else {
        console.error("Failed to toggle like. Response:", response);
      }
    } catch (error) {
      console.error("Error toggling like", error);
    }
  };
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

        <h2 className="text-xl font-medium text-black dark:text-white flex flex-row gap-2">
          Role:{" "}
          {champion.roles.map((role: RoleType) => (
            <p className="text-slate-500 dark:text-light" key={role.name}>
              {role.name}
            </p>
          ))}
        </h2>

        <h2 className="text-justify dark:text-light">{champion.description}</h2>
        <div className="flex pt-5 gap-2 text-2xl dark:text-light">
          <p className="font-medium text-slate-700 dark:text-light">Likes: </p>
          <p>{likeCount}</p>
        </div>
        <div>
          <div>
            {token ? (
              <button onClick={handleLikeClick} className="dark:text-light">
                {hasLiked ? "Unlike" : "Like"}
              </button>
            ) : (
              <p className="dark:text-light">
                Please log in to like this champion.
              </p>
            )}
          </div>
        </div>
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
    </div>
  );
};

export default ChampionDetails;
