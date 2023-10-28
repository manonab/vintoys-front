import { useRouter } from "next/router";

interface FinishedProps {
  message: string;
  router: string;
}

export const Finished: React.FC<FinishedProps> = ({ message, router }: FinishedProps) => {
  const route = useRouter();

  return (
    <div className="flex-col fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-blur bg-yellowCapiche z-50" onClick={() => route.push(`${router}`)}>
      <p className="text-center text-Medium font-Capuch text-white">{message}</p>
    </div>
  )
};