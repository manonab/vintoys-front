import React, { FunctionComponent, useState } from "react";
import SVG from "@common/svg";
import { useRouter } from "next/router";
import { useAuth } from "@context/auth-context";

const Header: FunctionComponent = () => {
  const { user_id, isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <header className="flex flex-row bg-mainColor shadow-lg w-full border-b border-bottom-3 border-black items-center justify-between py-4">
      <div className="grow  w-1/4 ml-5">
        <SVG width={50} height={40} name="Home" />
      </div>
      <div className="grow hover:cursor-pointer" onClick={() => router.push("/")}>
        <SVG width={240} height={40} name="Logo" />
      </div>
      <div className="grow-0 mx-5">
        <button className="border border-black h-auto mx-5 p-2">Sign in / Sign up</button>
      </div>
      <div className="grow-0 mx-10">
        <span onClick={() => router.push("/account")} className="hover:cursor-pointer">
          <SVG width={50} height={30} name="Alien" />
        </span>
      </div>
    </header>
  );
};

export default Header;
