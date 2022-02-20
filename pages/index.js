import { signOut } from "next-auth/react";
import Head from "next/head";
import { Header, SideBar } from "../components";

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | Linkedin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-x-5 ">
          {/* Sidebar */}
          <SideBar />
          {/* Feed */}
        </div>

        {/* Widgets */}
      </main>
    </div>
  );
}
