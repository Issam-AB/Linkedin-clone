import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { Header, SideBar } from "../components";

export default function Home() {
  const { data: session } = useSession();
  console.log("session is ", session);
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

export async function getServerSideProps(context) {
  //check if the user is authenticated om the server...
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        distination: "/home",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
