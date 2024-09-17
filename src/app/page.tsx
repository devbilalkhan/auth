import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-primary-foreground drop-shadow-md font-mono">
          Auth
        </h1>
        <p>A simple Auth Application</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
