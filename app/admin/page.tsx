"use client"
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import NullData from "../components/NullData";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []); 

  return (
    <div>
      {loggedIn ? 
      <div>Welcome!</div> 
      : <NullData />}
    </div>
  );
}

export default Admin;
