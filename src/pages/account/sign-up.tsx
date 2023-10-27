import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSignUp } from "@hooks/auth/use-signup";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp: React.FC = () => {
  const router = useRouter();
  const { signup } = useSignUp();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAuthentification = async () => {
    try {
      setError("");
      if (!street && !postalCode && !email && !password && !username && !city) {
        setError("Veuillez remplir tous les champs.")
        return;
      }
      signup({ email, password, username, city, street, postalCode: Number(postalCode) });
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  return (
    <div className="justify-items-center">
      <div className="w-full max-h-screen flex flex-col w-2/4 mx-auto mt-20">
        <h2 className="text-center text-Large text-black font-Capuch my-5">
          Créer ton compte!
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
        <div className="relative w-3/4 mx-auto my-3">
          <input
            className="w-full border p-2 rounded border-dotted font-baumans"
            placeholder="Mot de passe"
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
        <input
          className="w-3/4 border md:w-1/4 p-2 my-3	border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="Code postal"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <input
          className="w-3/4 border md:w-1/4 p-2	my-3 border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="Ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="w-3/4 border md:w-1/4 p-2 my-3	border-1 rounded border-dotted mx-auto font-baumans"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        {error && <p className="text-center text-red">{error}</p>}
        <div
          onClick={handleAuthentification}
          className="hover:cursor-pointer bg-black font-baumans w-auto mx-auto mt-10 capitalize w-3/4 border rounded px-20 py-2 rounded-[10px]"
        >
          <p className="text-white">Create</p>
        </div>

        <div className="flex mx-auto py-5 mb-10">
          <p className="px-2 font-baumans">Have already an account?</p>
          <span
            onClick={() => router.push("/account")}
            className="hover:cursor-pointer"
          >
            <p className="font-baumans font-bold">Sign in!</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
