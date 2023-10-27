import React, { useState } from "react";
import { useAuth } from "@context/auth-context";
import UserAccount from "@components/account";
import SignIn from "./sign-in";

const Account = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <UserAccount />;
  } else {
    return <SignIn />;
  }
};

export default Account;
