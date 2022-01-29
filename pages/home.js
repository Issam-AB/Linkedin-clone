import Image from "next/image";
import Head from "next/head";
import { HeaderLink } from "../components";
import {
	Explore,
	Group,
	OndemandVideoSharp,
	BusinessCenter,
	// ArrowForwardIosOutlined,
} from "@mui/icons-material";

const home = () => {
	return (
		<div>
			<Head>
				<title>LinkedIn</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="flex justify-around items-center py-5">
				<div className="relative w-36 h-10">
					<Image
						src="https://rb.gy/vtbzlp"
						layout="fill"
						objectFit="contain"
						alt="Linkdein-alt"
					/>
				</div>
				<div className=" flex items-center sm:divide-x divide-gray-300">
					<div className="hidden sm:flex space-x-8 pr-[24px]">
						<HeaderLink Icon={Explore} text="Discover" />
						<HeaderLink Icon={Group} text="People" />
						<HeaderLink Icon={OndemandVideoSharp} text="Learning" />
						<HeaderLink Icon={BusinessCenter} text="Jobs" />
					</div>
					<div className="pl-4">
						<button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
							Sign in
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default home;
