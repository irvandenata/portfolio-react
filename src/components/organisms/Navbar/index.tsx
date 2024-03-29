import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	function toggleMenu() {
		if (menuOpen) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	}
	return (
        <>
		<div className="container-fluid relative">
			<div className="fixed top-0 z-[9] shadow w-full bg-white">
				<header className="bg-white container  mx-auto ">
					<nav
						className="flex lg:px-0 items-center justify-between py-6"
						aria-label="Global"
					>
						<div className="flex lg:flex-1">
							<Link
								to="/"
								className="-m-1.5 p-1.5 hover:bg-primary hover:text-white hover:rounded "
							>
								<span className="font-bold text-2xl">IVD.</span>
							</Link>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								id="menu-button-mobile"
								onClick={toggleMenu}
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>
						</div>
						<div className="hidden lg:flex lg:gap-x-12">
							<Link to="/#about-me" className="text-sm font-light cursor-pointer px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:scale-110 hover:px-1">
								About Me
							</Link>
							<Link to='/#tech-stack' className="text-sm font-light cursor-pointer px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:scale-110 hover:px-1">
								Tech Stack
							</Link>
							<a className="text-sm font-light cursor-pointer  px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:scale-110 hover:px-1">
								Work Experieces
							</a>
							<a href="#tech-stack" className="text-sm font-light cursor-pointer px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:scale-110 hover:px-1">
								Projects
							</a>

							<Link
								to="/blog"
								className="text-sm font-light px-1 cursor-pointer leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:scale-110 hover:px-1"
							>
								My Blog
							</Link>
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<a className="text-sm font-semibold px-1 leading-6 text-gray-900 hover:bg-primary hover:text-white hover:rounded hover:scale-110 hover:px-1">
								Get In Touch<span >&rarr;</span>
							</a>
						</div>
					</nav>
					<div
						className={`${
							menuOpen ? "opacity-100" : "opacity-0 z-[-100] absolute"
						}  mobile-menu lg:hidden md:hidden transition-all duration-200 delay-75 ease-in-out`}
						role="dialog"
						aria-modal="false"
					>
						<div className="fixed inset-0 z-10"></div>
						<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
							<div className="flex items-center justify-between">
								<a
									href="/"
									className="-m-1.5 p-1.5 hover:bg-primary hover:text-white hover:scale-110 hover:rounded hover:scale-100 "
								>
									<span className="font-bold text-2xl">IVD.</span>
								</a>
								<button
									type="button"
									id="exit-menu-mobile"
									onClick={toggleMenu}
									className="-m-2.5 rounded-md p-2.5 text-gray-700"
								>
									<span className="sr-only">Close menu</span>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										<Link to="/detail" className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50">
											About Me
										</Link>
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
        </>
	);
};
