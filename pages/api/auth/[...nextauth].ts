import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { NextAuthOptions } from "next-auth";
import { signIn } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  //   pages: {
  //     signIn:
  //       "https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/login?client_id=3itmcimrr2cec3ak7v97v124v6&scope=openid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=5DsoAyUggA2fEfkshIHYfc-NJ7BTvRlpxopXkFHKGkI",
  //   },
};

export default NextAuth(authOptions);
