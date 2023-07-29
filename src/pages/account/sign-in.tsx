// sign-in.tsx
import React, { useState } from "react";
import Form from "@common/form";
import { useAuth } from "@context/auth-context";
import { useSignIn } from "@hooks/use-signin";
import { AuthPayload } from "@models/auth";
import { useRouter } from "next/router";

const SignIn = () => {
  const { updateAuthentication } = useAuth();
  const { isLoading, error, signIn } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAuthentification = async () => {
    try {
      const resp = await signIn({ email, password });
      if (resp?.message === "Sign in successful") {
        updateAuthentication(true);
        router.push("/account");
      }
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  return (
    <div>
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleAuthentification={handleAuthentification}
      />
    </div>
  );
};

export default SignIn;
