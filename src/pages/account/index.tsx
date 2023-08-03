import React from "react";
import { useAuth } from "@context/auth-context";
import UserAccount from "@components/account";
import SignIn from "./sign-in";

const Account = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <SignIn />;
  }

  return <UserAccount />;
};

export default Account;
