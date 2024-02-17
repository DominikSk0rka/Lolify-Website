import React from "react";
import { IconType } from "react-icons";

interface AdminNavItemProps {
  selected?: boolean;
  icon: IconType;
  label: string;
}

const AdminNavItem: React.FC<AdminNavItemProps> = ({
  selected,
  icon: Icon,
  label,
}) => {
  return (
    <div
      className={`flex items-center justify-center text-center gap-1 p-2 border-b-2
         hover:text-slate-800 transition cursor-pointer 
         ${
           selected
             ? "border-b-slate-800 dark:border-b-light text-slate-800 dark:text-light "
             : "border-transparent text-slate-500 dark:text-light/60"
         }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm text-center break-normal">
        {label}
      </div>
    </div>
  );
};

export default AdminNavItem;
