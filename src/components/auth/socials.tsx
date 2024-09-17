"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

type SocialsProps = {};

function Socials({}: SocialsProps) {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-full" variant={"outline"} size={"lg"}>
        <FcGoogle />
      </Button>
      <Button className="w-full" variant={"outline"} size={"lg"}>
        <FaGithub />
      </Button>
    </div>
  );
}

export default Socials;
