"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ChampionCardProps {
  data: any;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer  rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-4">(data.name)</div>
        <div className="font-semibold">(data.price)</div>
      </div>
    </div>
  );
};

export default ChampionCard;
