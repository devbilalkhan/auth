"use client";

import Link from "next/link";
import { Button } from "../ui/button";

type BackButtonProps = {
  href: string;
  label: string;
};

function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button
      asChild
      variant={"link"}
      className="font-normal w-full text-indigo-800/[0.8]"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export default BackButton;
