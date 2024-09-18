"use client";
import { ClassNameProps } from "@/lib/types";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";

type SubmitButtonProps = {
  label: string;
} & ClassNameProps;

function SubmitButton({ className, label }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={className}>
      {pending ? (
        <>
          <Loader className="animate-spin mr-2" />
          Please wait...
        </>
      ) : (
        label
      )}
    </Button>
  );
}

export default SubmitButton;
