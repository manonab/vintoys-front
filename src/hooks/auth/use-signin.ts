import { useAuth } from "@context/auth-context";
import { useState } from "react";
import { auth } from "../../api/user";
import { AuthPayload } from "../../models/auth";

interface SignInParams {
  email: string;
  password: string;
}
interface SignInResult {
  error: string | null;
  isLoading: boolean;
  signIn: (params: SignInParams) => Promise<AuthPayload | undefined>;
}

export const useSignIn = (): SignInResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { updateAuthentication } = useAuth();

  const signIn = async (params: SignInParams): Promise<AuthPayload | undefined> => {
    setIsLoading(true);
    try {
      const resp = await auth.signIn(params);
      if (resp?.status === 200) {
        updateAuthentication(true, resp?.data.user_token);
      }
      return undefined;
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
