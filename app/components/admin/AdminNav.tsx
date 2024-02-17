"use client";

import Link from "next/link";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";
import Container2 from "../inputs/Container2";

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="top-20 pt-4">
      <Container2>
        <div className="flex flex-row items-center justify-between md:justify-center gap-4 md:gap-6 ">
          <Link href="/admin">
            <AdminNavItem
              label="Admin Panel"
              icon={MdDashboard}
              selected={pathname === "/admin"}
            />
          </Link>
          <Link href="/admin/add-champion">
            <AdminNavItem
              label="Add Champion"
              icon={MdLibraryAdd}
              selected={pathname === "/admin/add-champion"}
            />
          </Link>
          <Link href="/admin/manage">
            <AdminNavItem
              label="Manage"
              icon={MdDns}
              selected={pathname === "/admin/manage"}
            />
          </Link>
        </div>
      </Container2>
    </div>
  );
};

export default AdminNav;
