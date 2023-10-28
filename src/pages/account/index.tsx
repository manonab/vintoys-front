import React from "react";
import { useAuth } from "@context/auth-context";
import UserAccount from "@components/account";
import SignIn from "./sign-in";
import { NextPage } from "next";

const Account: NextPage = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {isAuthenticated ? (
        <UserAccount />
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Account;
