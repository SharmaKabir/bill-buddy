"use client";

import { useStoreUser} from "@/hooks/use-store-user";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Header = () => {

    const {isLoading } = useStoreUser();



  return (
    <header className="fixed top-0 w-full border">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
      
    </header>
  );
};

export default Header;
