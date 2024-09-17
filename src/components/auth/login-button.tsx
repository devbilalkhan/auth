"use client";

import route from "@/app/config/route";
import { ClassNameProps } from "@/lib/types";
import { useRouter } from "next/navigation";

type LoginButtonProps = ClassNameProps & {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

function LoginButton({ children, mode, asChild }: LoginButtonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(route.LOGIN);
  };

  if (mode === "modal") {
    return <>Todo: implement modal</>;
  }
  return (
    <span onClick={onClick} className="cursor_pointer">
      {children}
    </span>
  );
}

export default LoginButton;
