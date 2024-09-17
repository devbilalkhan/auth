"use client";

import { ClassNameProps } from "@/lib/types";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Header from "@/components/auth/header";
import Socials from "./socials";
import BackButton from "./back-button";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
} & ClassNameProps;

function CardWrapper({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
