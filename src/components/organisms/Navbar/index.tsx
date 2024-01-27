export const Navbar = () => {
	return (
		<div className="snap-y container-fluid relative">
			<div id="navigation" className="top-0 z-9 shadow w-full bg-white">
				<header className="bg-white container  mx-auto ">
					<nav
						className="flex lg:px-0 items-center justify-between py-6"
						aria-label="Global"
					>
						<div className="flex lg:flex-1">
							<a
								href="/"
								className="-m-1.5 p-1.5 hover:bg-primary hover:text-white hover:animate-bounce hover:rounded hover:scale-100 "
							>
								<span className="font-bold text-2xl">IVD.</span>
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								id="menu-button-mobile"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							<a className="text-sm font-light px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:animate-bounce hover:px-1">
								About Me
							</a>
							<a className="text-sm font-light px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:animate-bounce hover:px-1">
								Tech Stack
							</a>
							<a className="text-sm font-light px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:animate-bounce hover:px-1">
								Work Experieces
							</a>
							<a className="text-sm font-light px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:animate-bounce hover:px-1">
								Projects
							</a>

							<a
								href="{{ route('blog.search') }}"
								className="text-sm font-light px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:animate-bounce hover:px-1"
							>
								My Blog
							</a>
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<a className="text-sm font-semibold px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:animate-bounce hover:px-1">
								Get In Touch<span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</nav>
					<div
						className="hidden mobile-menu transition ease-in-out delay-150 duration-300"
						role="dialog"
						aria-modal="false"
					>
						<div className="fixed inset-0 z-10"></div>
						<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
							<div className="flex items-center justify-between">
								<a
									href="/"
									className="-m-1.5 p-1.5 hover:bg-primary hover:text-white hover:animate-bounce hover:rounded hover:scale-100 "
								>
									<span className="font-bold text-2xl">IVD.</span>
								</a>
								<button
									type="button"
									id="exit-menu-mobile"
									className="-m-2.5 rounded-md p-2.5 text-gray-700"
								>
									<span className="sr-only">Close menu</span>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										<a className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
											About Me
										</a>
										<a className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
											Tech Stack
										</a>
										<a className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
											Work Experiences
										</a>
										<a className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
											Projects
										</a>
										<a className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
											My Blog
										</a>
									</div>
									<div className="py-6">
										<a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											Get In Touch
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
};
