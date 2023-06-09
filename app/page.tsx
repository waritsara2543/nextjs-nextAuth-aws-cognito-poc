import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import LoginButton from "@/components/LoginButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    // redirect(
    //   "https://my-super-app-poc-authentication-page.auth.ap-southeast-1.amazoncognito.com/login?client_id=3itmcimrr2cec3ak7v97v124v6&scope=openid&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito&state=KrlXM8gmh1oOok-C_UI63OY1wh2lrFJbi8G5yaqnYQQ&nonce=s7ETRQT21y0KMdOSF3umvtxQaO_f4PuBkaFSA9lObTM&code_challenge=WLh8l5IDesXMHfjpa2_F6qr-nl6YqIU4EMYlvRsnKmI&code_challenge_method=S256"
    // );
    redirect("/signin");
  }
  return (
    <main className={styles.main}>
      <div style={{ border: "2px solid red", padding: "10px" }}>
        <LoginButton session={session} />
      </div>
    </main>
  );
}
