import { useAuth } from "@context/auth-context";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../api/user";
import { AuthPayload, SignUpParams } from "../../models/auth";

interface SignUpResult {
  error: string | null;
  isLoading: boolean;
  signup: (params: SignUpParams) => Promise<AuthPayload | undefined>;
}

export const useSignUp = (): SignUpResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { updateAuthentication } = useAuth();
  const router = useRouter();
  const signup = async (params: SignUpParams): Promise<AuthPayload | undefined> => {
    setIsLoading(true);
    try {
      const resp = await auth.signUp(params);
      if (resp?.status === 200) {
        updateAuthentication(true, resp?.data.user_token);
        router.push("/account/signin");
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

  return { error, isLoading, signup };
};
