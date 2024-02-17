"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Container2 from "../components/inputs/Container2";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Container2 className="dark:text-light">
        <div className="text-center text-6xl pt-10 font-bold font-mono">
          Admin Panel
        </div>
      </Container2>
    </div>
  );
};

export default Admin;
