import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="w-full bg-pastelBlue h-[200px]"></div>
      <div
        className="w-full bg-turquoise h-[200px] flex flex-col justify-center Class
Properties
items-start	align-items: flex-start;
items-end	align-items: flex-end;
items-center"
      >
        <h1 className="uppercase my-2 text-center text-xl">SIGN UP!</h1>
        <input className="border w-1/3 p-2 items-center" placeholder="name"></input>
        <input className="border w-1/3 p-2 my-2" placeholder="email"></input>
      </div>
      <div className="w-full bg-yellow h-[200px]"></div>
      <div className="w-full bg-red h-[200px]"></div>
    </div>
  );
};

export default SignUp;
