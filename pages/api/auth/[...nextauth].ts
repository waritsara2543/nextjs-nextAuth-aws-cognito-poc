import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  secret: process.env.AUTH_SECRET,

  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
      checks: ["state", "pkce", "nonce"],
      idToken: true,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }: any) {
      // Return true to allow sign in and false to block sign in.
      return true;
    },
    async redirect({ url, baseUrl }: any) {
      // Return the url to redirect to after successful sign in.
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }

      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
