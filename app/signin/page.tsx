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
        }}
      >
        login
      </button>
    </div>
  );
}
