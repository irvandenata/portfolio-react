import { Link } from "react-router-dom";

export const Project = () => {
	return (
		<div
			className="snap-always snap-center container min-h-screen mx-auto flex items-center sm:py-16"
		>
			<div className="w-full">
				<div className="flex lg:flex-row sm:flex-col justify-between">
					<h1 className="text-3xl sm:text font-bold">
						The project <span className="text-primary">I'm working on</span>
					</h1>
					<Link
						to="/blog"
						className="inline-flex items-center text-lg sm:text-sm font-bold hover:bg-background lg:mt-0 sm:mt-6 lg:p-2 rounded-lg  text-center text-black bg-blue-700 "
					>
						See More Projects
						<svg
							className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</Link>
				</div>
				<div className="flex">
					<div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-y-10 gap-x-6 mt-10 w-full">
						<div className="max-w-sm bg-background border-2 border-gray rounded-lg hover:border-primary shadow dark:bg-gray-800 dark:border-gray-700 text-left z-[1] h-[350px] relative">
							<Link to="/detail" className="">
								<img
									className="rounded-lg p-1"
									style={{ objectFit: "cover", width: "100%", height: "185px" }}
									src="https://picsum.photos/id/237/200/300"
									alt="Gambar"
								/>
							</Link>
							<div className="p-5">
								<a href="{{ route('blog.show', $item->slug) }}" className="">
									<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
										Bukan Berita Hoax
									</h5>
								</a>
								
							</div>
                            <Link
									to="/detail"
									className="inline-flex absolute bottom-2 left-2 items-center p-2 text-sm font-medium bg-gray  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-primary hover:text-black"
								>
									Read more
								</Link>
						</div>
                        
					</div>
				</div>
			</div>
		</div>
	);
};
