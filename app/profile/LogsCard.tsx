"use client";

interface LogsCardProps {
  logs: any;
}

const LogsCard: React.FC<LogsCardProps> = ({ logs }) => {
  return (
    <div className="col-span-1 cursor-pointer rounded-b-xl border-[1.5px] border-dark bg-light dark:border-light dark:text-light dark:bg-dark/70 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center">
        <div className="font-bold pb-2 pt-5 text-2xl ">{logs.name}</div>
      </div>
    </div>
  );
};

export default LogsCard;
