"use client";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  return (
    <div>
      <button
        onClick={() => {
          signIn("cognito");
          // send api login
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          signIn("cognito");
          // send api signup
        }}
      >
        signup
      </button>
    </div>
  );
}
