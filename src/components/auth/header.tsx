import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  weight: "400",
  subsets: ["latin"],
});

type HeaderProps = {
  label: string;
};

function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
      <h1 className={cn("text-3xl font-semibold", font)}>Auth</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}

export default Header;
