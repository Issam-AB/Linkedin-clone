import { AnimatePresence } from "framer-motion";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { Header, SideBar, Feed, Modal } from "../components";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ posts }) {
  // console.log(posts);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  //check if the user is authenticated om the client...
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });

  return (
    <div className="bg-[#F3F2EF] dark:bg-[rgb(4,17,26)] dark:text-white h-screen overflow-y-scroll md:space-y-6">
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
          <Feed posts={posts} />
        </div>

        {/* Widgets */}
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
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

  // fetch data using SSR
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find()
    .sort({ timestamp: -1 })
    .toArray();

  return {
    props: {
      session,
      posts: posts.map((post) => ({
        _id: post._id.toString(),
        input: post.input,
        photoUrl: post.photoUrl,
        username: post.username,
        email: post.email,
        userImg: post.userImg,
        createdAt: post.createdAt,
      })),
    },
  };
}
