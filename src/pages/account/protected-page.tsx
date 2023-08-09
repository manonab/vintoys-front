import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@context/auth-context";

const ProtectedPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/account/sign-in");
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is accessible only to authenticated users.</p>
    </div>
  );
};

export default ProtectedPage;
