import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import LoginButton from "@/components/LoginButton";

import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.main}>
      <div style={{ border: "2px solid red", padding: "10px" }}>
        <LoginButton session={session} />
      </div>
    </main>
  );
}
