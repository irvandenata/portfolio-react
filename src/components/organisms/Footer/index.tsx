export const Footer = () => {
	return (
		<div className="snap-always snap-start container mb-4 mx-auto flex justify-center items-center">
			<div className="w-full">
				<div className=" bg-background container rounded-lg border-2 border-gray p-4 dark:bg-gray-800 flex justify-center">
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2024{" "}
						<a href="#" className="hover:underline">
							Irvan Denata™
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</div>
	);
};
