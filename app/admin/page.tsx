"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import NullData from "../components/NullData";
import Container from "../components/inputs/Container";

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
        <div>{loggedIn ? <div>Welcome!</div> : <NullData />}</div>
      </main>
    </Container>
  );
};

export default Admin;
