import React from "react";
import { useRouter } from "next/router";

interface Props {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleAuthentification: () => void;
}

const Form: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleAuthentification,
}: Props) => {
  const router = useRouter();

  return (
    <div className="justify-items-center">
      <div className="w-full max-h-screen flex flex-col w-2/4 mx-auto mt-20">
        <h2 className="text-center text-Large text-black font-Capuch my-5">
          Sign in to your account
        </h2>
        <input
          className="font-inter w-3/4 border md:w-1/4 p-2	border-1 rounded border-dotted mx-auto"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="font-inter w-3/4 border md:w-1/4 p-2 my-2 rounded border-1 border-dotted mx-auto"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          onClick={handleAuthentification}
          className="hover:cursor-pointer bg-black font-baumans w-auto mx-auto mt-10 capitalize w-3/4 border rounded px-20 py-2"
        >
          <p className="capitalize text-white">Login</p>
        </div>
        <div className="flex mx-auto py-5">
          <p className="px-2 font-baumans">Don't have an account?</p>
          <span
            onClick={() => router.push("/account/sign-up")}
            className="hover:cursor-pointer"
          >
            <p className="font-baumans font-bold">Create one!</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
