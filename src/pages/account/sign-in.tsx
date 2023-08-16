import React, { useState } from "react";
import { useRouter } from "next/router";
import Form from "@common/form";
import { useAuth } from "@context/auth-context";
import { useSignIn } from "@hooks/auth/use-signin";

const SignIn = () => {
  const { updateAuthentication, isAuthenticated } = useAuth();
  const { signIn } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAuthentification = async () => {
    try {
      const resp = await signIn({ email, password });
      if (resp?.status === 200) {
        updateAuthentication(true, resp?.data?.user_token);
        router.push("/account");
      }
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  return (
    <Form
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleAuthentification={handleAuthentification}
    />
  );
};

export default SignIn;
