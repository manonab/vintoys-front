import { useState } from "react";
import { auth } from "../api/user";
import { ApiResponse, AuthPayload } from "../models/auth";

interface SignInParams {
  email: string;
  password: string;
}

interface SignInResult {
  error: string | null;
  isLoading: boolean;
  signIn: (params: SignInParams) => Promise<ApiResponse | undefined>;
}

export const useSignIn = (): SignInResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (params: SignInParams): Promise<ApiResponse | undefined> => {
    setIsLoading(true);
    try {
      const resp = await auth.signIn(params);
      return resp?.data;
    } catch (err: any) {
      console.error("Error:", err);
      setError(err);
      return undefined;
    } finally {
      setIsLoading(false);
      console.log("Finished");
    }
  };

  return { error, isLoading, signIn };
};
