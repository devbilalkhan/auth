import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="h-full flex items-center justify-center">{children}</main>
  );
}

export default AuthLayout;
