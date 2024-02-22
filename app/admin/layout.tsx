"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AdminNav from "../components/admin/AdminNav";
import Container2 from "../components/inputs/Container2";
import NullData from "../components/navbar/NullData";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setLoggedIn(true);

      fetch("https://lolify.fly.dev/api/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.is_admin === "true") {
            setIsAdmin(true);
          }
        })
        .catch((error) => {
          console.error(
            "Błąd podczas pobierania informacji o użytkowniku:",
            error
          );
        });
    }
  }, []);

  return (
    <Container2 className="dark:bg-dark">
      {loggedIn ? (
        <>
          {isAdmin ? (
            <>
              <AdminNav />
              {children}
            </>
          ) : (
            <NullData />
          )}
        </>
      ) : (
        <NullData />
      )}
    </Container2>
  );
};

export default AdminLayout;
