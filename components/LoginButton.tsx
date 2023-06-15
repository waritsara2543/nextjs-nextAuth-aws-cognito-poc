"use client";
import { Session } from "next-auth";
import { getSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginButton({ session }: { session: Session | null }) {
  const [tmp, setTmp] = useState(false);

  useEffect(() => {
    console.log(session);
  }, []);

  const handleSignOut = async (e: any) => {
    e.preventDefault();
    await signOut(); // this only clears the cookie session
    //const url = `https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/logout?response_type=code&client_id=3itmcimrr2cec3ak7v97v124v6&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&scope=openid`;
    const url = `https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/logout?client_id=3itmcimrr2cec3ak7v97v124v6&logout_uri=http://localhost:3000`;
    window.location.href = url;
  };

  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* <Link href="https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/login?client_id=3itmcimrr2cec3ak7v97v124v6&scope=openid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=j4y6ZVsZskJacT5fbGXcxWpGALgPG3I2bd-j4b5l3Bo&nonce=2CSvI_nV71wxjM8dpcGAbIRWVwszGY8IolxoF3-wXWs&code_challenge=j2K6nbeDB3q1k9OsElatEuoYgIJAC9ig5Fm1UAeu6G8&code_challenge_method=S256">
          <button>use defferent account</button>
        </Link> */}
        <button
          onClick={(e) => {
            handleSignOut(e);
          }}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("cognito")}>Sign in</button>
      {/*https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/login?client_id=3itmcimrr2cec3ak7v97v124v6&scope=openid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=Xa_LpNiw50zO8wy-xR_4TJZy6hpuTp-ylD1lbwdci-0&code_challenge=QdkLTIldw36CPupXiRxJXdX3bzTnm-_ZMCIFvRo6RHs&code_challenge_method=S256}
      
      {/* {signInhandler} */}
      {/* {signIn("cognito")} */}
    </>
  );
}
//https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/logout?response_type=code&client_id=3itmcimrr2cec3ak7v97v124v6redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=XP5sJJWnWYw_kTT-fBwz5ewBq6tCveX8KRrSYNPg1Ig&nonce=kj8ONyAvfyAUOPEwQlfRIsSJCGfLDC-D8dqgFsQd81k&scope=openid

//https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/login?client_id=3itmcimrr2cec3ak7v97v124v6&scope=openid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=4OCgoYqMjKUhKVxPUJl91YHvAMbLa5Rqdbo5pxfwZgw&nonce=aidlkkAdsw0ZSSKwOUqBB2JgHeKcox-4wzOCOVDuQsI&code_challenge=_CNviVNB9yQaK0pn5ZwSWjntd5UI0wMXEEqq1UWPpq8&code_challenge_method=S256

//https://<YOUR_DOMAIN>.auth.<REGION>.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=<REDIRECT_URI>&response_type=TOKEN&client_id=<CLIENT_ID>&scope=openid
