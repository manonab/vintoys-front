import React from "react";
import { useRouter } from "next/router";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
interface Props {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleAuthentification: () => void;
  error?: string;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

const Form: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleAuthentification,
  error,
  showPassword,
  togglePasswordVisibility
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
        <div className="relative w-3/4 mx-auto my-3">
          <input
            className="w-full border p-2 rounded border-dotted font-baumans"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>
        {error && <p className="text-center text-red">{error}</p>}
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
