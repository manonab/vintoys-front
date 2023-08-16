import React, { useState } from "react";
import Button from "@common/button";
import { useRouter } from "next/router";
import { useSignUp } from "@hooks/auth/use-signup";
import { Container } from "@common/container";

const SignUp: React.FC = () => {
  const router = useRouter();
  const { signup } = useSignUp();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");

  const handleAuthentification = async () => {
    try {
      signup({ email, password, username, city, street, postalCode: Number(postalCode) });
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  return (
    <Container className="justify-items-center">
      <Container className="w-full max-h-screen flex flex-col w-2/4 mx-auto mt-20">
        <h2 className="text-center text-Large text-black font-Capuch my-5">
          Create your account!
        </h2>
        <input
          className="w-3/4 border md:w-1/4 p-2 my-3	border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-3/4 border md:w-1/4 p-2	my-3 border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-3/4 border md:w-1/4 p-2 my-3 rounded border-1 border-dotted mx-auto font-baumans"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="w-3/4 border md:w-1/4 p-2 my-3	border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="Postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <input
          className="w-3/4 border md:w-1/4 p-2	my-3 border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="w-3/4 border md:w-1/4 p-2 my-3	border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <Container
          onClick={handleAuthentification}
          className="hover:cursor-pointer bg-black font-baumans w-auto mx-auto mt-10 capitalize w-3/4 border rounded px-20 py-2 rounded-[10px]"
        >
          <p className="text-white">Create</p>
        </Container>

        <Container className="flex mx-auto py-5 mb-10">
          <p className="px-2 font-baumans">Have already an account?</p>
          <span
            onClick={() => router.push("/account/sign-in")}
            className="hover:cursor-pointer"
          >
            <p className="font-baumans font-bold">Sign in!</p>
          </span>
        </Container>
      </Container>
    </Container>
  );
};

export default SignUp;
