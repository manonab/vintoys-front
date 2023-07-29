import React from "react";
import Button from "@common/button";

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
  return (
    <div>
      <div className="w-full bg-turquoise h-[200px] flex flex-col justify-center">
        <input
          className="border w-1/3 p-2 items-center"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border w-1/3 p-2 my-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button isPost={false} text="Login" onClick={handleAuthentification} />
      </div>
    </div>
  );
};

export default Form;
