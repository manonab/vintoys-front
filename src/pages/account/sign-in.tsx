import React, { useState } from "react";
import { useRouter } from "next/router";
import Form from "@common/form";
import { useAuth } from "@context/auth-context";
import { useSignIn } from "@hooks/auth/use-signin";

const SignIn = () => {
  const { updateAuthentication } = useAuth();
  const { signIn } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleAuthentification = async () => {
    try {
      setError("");
      if (!email || !password) {
        setError("Please fill all the requires values");
        return;
      }
      const resp = await signIn({ email, password });
      if (resp?.status === 200) {
        updateAuthentication(true, resp?.data?.user_token);
        router.push("/account");
      }
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleAuthentification={handleAuthentification}
        error={error}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </div>
  );
};

export default SignIn;
