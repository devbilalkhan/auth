"use client";
import { ClassNameProps } from "@/lib/types";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { MdPendingActions } from "react-icons/md";

type SubmitButtonProps = {
  label: string;
} & ClassNameProps;

function SubmitButton({ className, label }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={className}>
      {pending ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-loader animate-spin duration-2000  mr-2 text-primary-foreground"
          >
            <path d="M12 2v4" />
            <path d="m16.2 7.8 2.9-2.9" />
            <path d="M18 12h4" />
            <path d="m16.2 16.2 2.9 2.9" />
            <path d="M12 18v4" />
            <path d="m4.9 19.1 2.9-2.9" />
            <path d="M2 12h4" />
            <path d="m4.9 4.9 2.9 2.9" />
          </svg>
          Please wait...
        </>
      ) : (
        label
      )}
    </Button>
  );
}

export default SubmitButton;
