import { onMouseEnter, onMouseLeave } from "../../../functions/mouseHandler";

export const TechStack = () => {
	return (
		<div
			className=" snap-center snap-alaways container min-h-screen mx-auto  flex items-center sm:py-16"
			id="tech-stack"
		>
			<div className="lg:flex w-full">
				<div className="lg:basis-2/3 ">
					<h1 className="text-3xl font-bold">
						Work <span className="text-primary">Experiences</span>
					</h1>
					<div className="flex-row mt-10">
						<ol className="relative -z-10 border-s border-background dark:border-gray-700">
							<li className="mb-10 ms-6 px-4 -z-10 text-left">
								<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-background dark:border-gray-900 dark:bg-blue-900">
									<svg
										className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
									</svg>
								</span>
								<h3 className="flex items-center mb-1 text-lg text-black font-semibold text-gray-900 dark:text-white">
									Dunia
								</h3>
								<p className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
									Tukang
								</p>
								<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
									20-10-1999 - 20-10-2010
								</time>
								<p className="mb-4 text-base font-thin text-gray-500 dark:text-gray-400">
									Membuat Candi dalam satu malam
								</p>
							</li>
						</ol>
					</div>
				</div>
				<div className="lg:basis-1/3 lg:pt-0 sm:pt-32" id="tech-stack-2">
					<h1 className="text-3xl font-bold  ">
						Tech S<span className="text-primary">tac</span>k
					</h1>
					<div className="flex-row">
						<div className="mt-10">
							<h2 className="text-lg">Frontend</h2>
							<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-5 md:gap-3 mt-4">
								<div
									onMouseEnter={onMouseEnter}
									onMouseLeave={onMouseLeave}
									id="title-1"
									className="  flex-row justify-center static"
								>
									<div className="icon-stack p-2 bg-background rounded-lg hover:border-primary hover:border-2 border-2 border-background cursor-pointer flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="60"
											height="60"
											viewBox="0 0 48 48"
										>
											{" "}
											<polygon
												fill="#40c4ff"
												points="26,4 6,24 12,30 38,4"
											></polygon>
											<polygon
												fill="#40c4ff"
												points="38,22 27,33 21,27 26,22"
											></polygon>
											<rect
												width="8.485"
												height="8.485"
												x="16.757"
												y="28.757"
												fill="#03a9f4"
												transform="rotate(-45.001 21 33)"
											></rect>
											<polygon
												fill="#01579b"
												points="38,44 26,44 21,39 27,33"
											></polygon>
											<polygon
												fill="#084994"
												points="21,39 30,36 27,33"
											></polygon>{" "}
										</svg>
									</div>
									<p className="icon-caption border border-gray text-sm absolute invisible  font-thin text-center mt-2 bg-background p-1 rounded">
										Flutter
									</p>
								</div>
							</div>
						</div>
						<div className="mt-16">
							<h2 className="text-lg">Backend</h2>
							<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-5 md:gap-3 mt-4">
								<div
									onMouseEnter={onMouseEnter}
									onMouseLeave={onMouseLeave}
									id="title-2"
									className="flex-row justify-center static"
								>
									<div className="icon-stack p-2 bg-background rounded-lg hover:border-primary hover:border-2 border-2 border-background cursor-pointer flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="60"
											height="60"
											viewBox="0 0 48 48"
										>
											{" "}
											<polygon
												fill="#40c4ff"
												points="26,4 6,24 12,30 38,4"
											></polygon>
											<polygon
												fill="#40c4ff"
												points="38,22 27,33 21,27 26,22"
											></polygon>
											<rect
												width="8.485"
												height="8.485"
												x="16.757"
												y="28.757"
												fill="#03a9f4"
												transform="rotate(-45.001 21 33)"
											></rect>
											<polygon
												fill="#01579b"
												points="38,44 26,44 21,39 27,33"
											></polygon>
											<polygon
												fill="#084994"
												points="21,39 30,36 27,33"
											></polygon>{" "}
										</svg>
									</div>
									<div>
										<p className="icon-caption border border-gray text-sm absolute invisible  font-thin text-center mt-2 bg-background p-1 rounded">
											Flutter
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-16">
							<h2 className="text-lg">Others</h2>
							<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-5 md:gap-3 mt-4">
								<div
									onMouseEnter={onMouseEnter}
									onMouseLeave={onMouseLeave}
									id="title-3"
									className="flex-row item-center static"
								>
									<div className="icon-stack p-2 bg-background rounded-lg hover:border-primary hover:border-2 border-2 border-background cursor-pointer flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="60"
											height="60"
											viewBox="0 0 48 48"
										>
											{" "}
											<polygon
												fill="#40c4ff"
												points="26,4 6,24 12,30 38,4"
											></polygon>
											<polygon
												fill="#40c4ff"
												points="38,22 27,33 21,27 26,22"
											></polygon>
											<rect
												width="8.485"
												height="8.485"
												x="16.757"
												y="28.757"
												fill="#03a9f4"
												transform="rotate(-45.001 21 33)"
											></rect>
											<polygon
												fill="#01579b"
												points="38,44 26,44 21,39 27,33"
											></polygon>
											<polygon
												fill="#084994"
												points="21,39 30,36 27,33"
											></polygon>{" "}
										</svg>
									</div>
									<p className="icon-caption border border-gray text-sm absolute invisible  font-thin text-center mt-2 bg-background p-1 rounded">
										Flutter
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
