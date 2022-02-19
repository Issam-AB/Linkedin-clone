import { signOut } from "next-auth/react";
import Head from "next/head";
import { Header } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Linkedin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
