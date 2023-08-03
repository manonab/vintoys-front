import React from "react";
import { useAuth } from "@context/auth-context";
import PostAds from "./post-ads";
import SignIn from "@pages/account/sign-in";

const Create: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <SignIn />; // Or redirect to login page
  }
  return <PostAds />;
};

export default Create;
