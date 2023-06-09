// /api/auth/federated-logout
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // const token = await getToken({ req });
    // console.log(token);

    // if (!token && process.env.NEXTAUTH_URL) {
    //   console.warn(
    //     "No JWT token found when calling /federated-logout endpoint,"
    //   );
    //   return res.redirect(process.env.NEXTAUTH_URL);
    // }
    // if (token && !token.idToken)
    //   throw new Error(
    //     "Without an id_token the user won't be redirected back from the IdP after logout."
    //   );

    // if (token && token.idToken) {
    const endsessionURL = `https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/logout?client_id=3itmcimrr2cec3ak7v97v124v6&logout_uri=http://localhost:3000`;
    //   const paramsString = `id_token_hint=${token.idToken}`;
    //   const searchParams = new URLSearchParams(paramsString);
    return res.redirect(`${endsessionURL}`);
    // }
    // throw new Error("Something went wrong - see federated-logout");
  } catch (error) {
    console.error(error);
  }
}
