import { signOut } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Linkedin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
