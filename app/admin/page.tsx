"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import NullData from "../components/NullData";
import Container from "../components/inputs/Container";
import Link from "next/link";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Container>
      <main className="dark:text-white">
        {loggedIn ? (
          <div className="flex flex-col gap-2">
            <Link href="admin/add-champion">Admin</Link>
            <Link href="admin/manage">Manage Champions</Link>
          </div>
        ) : (
          <NullData />
        )}
      </main>
    </Container>
  );
};

export default Admin;
