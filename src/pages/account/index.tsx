import React from "react";
import { useAuth } from "@context/auth-context";

const Account = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div>Loading...</div>; // Or redirect to login page
  }

  return <div>Account</div>; // This is just a placeholder. You can render the actual account content here.
};

export default Account;
