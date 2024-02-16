"use client";

import Link from "next/link";
import AdminNavItem from "./AdminNavItem";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";

import { usePathname } from "next/navigation";
import Container from "../inputs/Container";

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <Container>
      <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
        <Link href="/admin">
          <AdminNavItem
            label="Main"
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
      </div>
    </Container>
  );
};

export default AdminNav;
