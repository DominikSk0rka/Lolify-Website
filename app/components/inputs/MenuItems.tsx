"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

const MenuItems = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="mx-4 cursor-pointer">
          Logout
        </button>
      ) : (
        <Link href="/login" className="mx-4">
          Login
        </Link>
      )}
    </>
  );
};

export default MenuItems;
