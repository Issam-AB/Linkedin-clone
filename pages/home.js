import Image from "next/image";
import Head from "next/head";
import { HeaderLink } from "../components";
import {
  Explore,
  Group,
  OndemandVideoSharp,
  BusinessCenter,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { getProviders, signIn } from "next-auth/react";

const home = ({ providers }) => {
  // console.log('he is ', providers);
  // console.log(providers);
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image
            src="https://rb.gy/vtbzlp"
            layout="fill"
            objectFit="contain"
            alt="linkedin"
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={Explore} text="Discover" />
            <HeaderLink Icon={Group} text="People" />
            <HeaderLink Icon={OndemandVideoSharp} text="Learning" />
            <HeaderLink Icon={BusinessCenter} text="Jobs" />
          </div>

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2 shadow-lg shadow-blue-500/50"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search</h2>
              <ArrowForwardIosOutlined className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know </h2>
              <ArrowForwardIosOutlined className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosOutlined className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] right-5 top-14">
          <Image
            src="https://rb.gy/vkzpzt"
            layout="fill"
            priority
            alt="ImageHome"
          />
        </div>
      </main>
    </div>
  );
};

export default home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
