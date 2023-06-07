"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { log } from "console";
import { useEffect } from "react";

export default function LoginButton({ session }: { session: Session | null }) {
  const [tmp, setTmp] = useState(false);
  // const signInhandler = () => {
  //   if (tmp != true) {
  //     signIn("cognito");
  //     setTmp(true);
  //   }
  // };

  // useEffect(() => {
  //   signInhandler();
  //   return;
  // }, []);

  // useEffect(() => {
  //   console.log("sessionX", sessionx);
  // }, []);

  if (session && session.user) {
    console.log("sessipn =>", session);

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("cognito")}>Sign in</button>
      {/* {signInhandler} */}
      {/* {signIn("cognito")} */}
    </>
  );
}
