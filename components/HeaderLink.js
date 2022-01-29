function HeaderLink({ Icon, text, avatar, feed }) {
	return (
		<div
			className={`cursor-pointer flex flex-col items-center justify-center ${
				feed
					? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1"
					: "text-gray-500 hover:text-gray-700"
			}`}
		>
			{avatar ? <Icon className="!h-7 !w-7 lg:!mb-1" /> : <Icon />}

			<div className="text-sm text-center">{text}</div>
		</div>
	);
}

export default HeaderLink;
