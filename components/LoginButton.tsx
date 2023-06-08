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

  const handleSignOut = async (e: any) => {
    console.log("call");

    e.preventDefault();
    await signOut(); // this only clears the cookie session
    const url = `
    https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/logout?client_id=3itmcimrr2cec3ak7v97v124v6&response_type=code&logout_uri=http://localhost:3000&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito"`;
    // "https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/login?client_id=3itmcimrr2cec3ak7v97v124v6&scope=openid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=IID_KfjuXyKfHeR473q08q411KhpUtQiMIgv9jIH0os&code_challenge=7eICXCaN76C0fx9z0LpJ8yV9gs0agZ1CffO1tvL_MEg&code_challenge_method=S256"
    // const url = "http://localhost:3000";
    // const url = "https://google.co.th";

    window.location.href = url;
  };

  if (session && session.user) {
    console.log("sessipn =>", session);

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={(e) => handleSignOut(e)}>Sign out</button>
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
