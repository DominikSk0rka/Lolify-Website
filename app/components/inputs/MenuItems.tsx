"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';

const MenuItems = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

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
