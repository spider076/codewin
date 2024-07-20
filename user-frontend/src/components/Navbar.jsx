import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import LoginButton from "./ui/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./ui/LogoutButton";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();

  const userId = "23423";
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user") || "{}");

  const disconnect = () => "disconnect";
  const address = null;

console.log('user : '+user?.name);
  const logoutHandler = () => {
    localStorage.removeItem("user");
    disconnect();

    window.location.reload();

    // Disconnect the Local Wallet from the SDK
  };

  // REMOVE
  // useEffect(() => {
  //     setUser(userState);
  // }, []);

  return (
    <div className="w-full px-14 py-4 xl:px-18">
      <main className="flex items-center justify-between text-white">
        {/* Logo */}
        <div className="h-full w-full">
          <h1 className="text-2xl font-semibold">CodeWin</h1>
        </div>
        {/* right side */}
        {isAuthenticated ? (
          <div className='flex space-x-4 items-center'>
            <p>{user.name}</p>
            <LogoutButton />
          </div>
        ) : <LoginButton />}

        {/* user */}
      </main>
    </div>
  );
};

export default Navbar;
