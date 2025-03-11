import { signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Войти</h1>
      <Button onClick={() => signIn("google")} className="mt-4">
        Войти через Google
      </Button>
    </div>
  );
};

export default SignIn;