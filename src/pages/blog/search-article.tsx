import { useCallback, useEffect, useState } from "react";
import Transition from "../../components/molecules/Transition";
import { Footer } from "../../components/organisms/Footer";
import { Navbar } from "../../components/organisms/Navbar";
import { ArticleItemInterface } from "../../services/data-types";
import { getArticles, getLatestProjects } from "../../services/home";
import { toast } from "react-toastify";

const SearchArticle = () => {
	const urlSearchString = window.location.search;
	const params = new URLSearchParams(urlSearchString);
	const [article, setArticle] = useState<ArticleItemInterface[]>([]);
	const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPage: 1,
    });
	const getArticlesAPI = useCallback(async () => {
		const category = params.get("category") ? params.get("category") : "";
		let response;
		if (category == "project") {
			response = await getLatestProjects();
		} else {
			response = await getArticles(category!);
		}
		if (response.error) {
			toast.error(response.message);
		} else {
			setArticle(response.data);
		}
	}, []);

	useEffect(() => {
		getArticlesAPI();
	}, []);

	return (
		<>
			<Navbar />
			<div>
				<div className=" snap-none container min-h-screen mx-auto justify-center items-center">
					<div className="w-full">
						<form className="static mt-32" action="/">
							<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray">
								Search
							</label>
							<div className="relative -z-10">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg
										className="w-4 h-4 text-gray dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
										/>
									</svg>
								</div>
								<input
									type="text"
									id="default-search"
									name="search"
									className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray  rounded-lg bg-gray-50  focus:border-primary focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-primary"
									placeholder="Search Name, Location ..."
									required
								/>
								<button
									type="submit"
									className="text-black absolute end-2.5 bottom-2.5 bg-background hover:bg-blue-800 focus:border-2 focus:border-primary focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
								>
									Search
								</button>
							</div>
						</form>
					</div>
					<div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-y-10 gap-x-6 mt-10 ">
						<div className="max-w-sm bg-background border-2 border-gray rounded-lg hover:border-primary shadow dark:bg-gray-800 dark:border-gray-700 h-[350px] relative  text-left">
							<a href="/" className="">
								<img
									className="rounded-lg p-1"
									style={{ objectFit: "cover", width: "100%", height: "185px" }}
									src="https://picsum.photos/id/237/200/300"
									alt="Article"
								/>
							</a>
							<div className="p-5">
								<a href="/" className="">
									<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
										Mantap Memang
									</h5>
								</a>
								<a
									href="/"
									className=" absolute bottom-2 left-2 inline-flex items-center p-2 text-sm font-medium bg-gray  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-primary hover:text-black"
								>
									Read more
								</a>
							</div>
						</div>
					</div>
					{/* <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white"> Sorry, we couldn't find any results for this
            search.</h1>
        </div> */}

					<div
						className="w-full mt-10 mb-10 flex justify-center"
						id="pagination"
					>
						<nav aria-label="Page navigation example">
							<ul className="inline-flex -space-x-px text-base h-10">
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										Previous
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center  justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										1
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										2
									</a>
								</li>
								<li>
									<a
										href="#"
										aria-current="page"
										className="flex items-center justify-center px-4 h-10 hover:bg-background text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
									>
										3
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										4
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										5
									</a>
								</li>
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										Next
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Transition(SearchArticle);
