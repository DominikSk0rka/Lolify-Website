"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AdminNav from "../components/admin/AdminNav";
import Container2 from "../components/inputs/Container2";
import NullData from "../components/NullData";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Container2 className="dark:bg-dark">
      {loggedIn ? (
        <>
          <AdminNav />
          {children}
        </>
      ) : (
        <NullData />
      )}
    </Container2>
  );
};

export default AdminLayout;
