// components/ProtectedRoute.tsx
import React from "react";
import { useAuth } from "@context/auth-context";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { id } = router.query;

  if (!isAuthenticated) {
    router.push("/account/sign-in");
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
