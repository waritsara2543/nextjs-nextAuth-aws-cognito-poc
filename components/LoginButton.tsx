"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

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

  if (session && session.user) {
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
      {/* <button onClick={() => signIn("cognito")}>Sign in</button> */}
      {/* {signInhandler} */}
      {signIn("cognito")}
    </>
  );
}
