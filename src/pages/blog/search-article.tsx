import { useCallback, useEffect, useState } from "react";
import Transition from "../../components/molecules/Transition";
import { Footer } from "../../components/organisms/Footer";
import { Navbar } from "../../components/organisms/Navbar";
import { ArticleItemInterface } from "../../services/data-types";
import ArticleCard from "../../components/molecules/ArticleCard";
import { getArticles, getLatestProjects } from "../../services/home";
import { toast } from "react-toastify";

const SearchArticle = () => {
	const urlSearchString = window.location.search;
	const params = new URLSearchParams(urlSearchString);
	const [articles, setArticles] = useState<ArticleItemInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        currentPage: params.get("page") ? parseInt(params.get("page")!) : 1,
        lastPage: 1,
        totalPage: 1,
        nextPage: false,
        prevPage: false,
    });
    const [query, setQueries] = useState({
        category: params.get("category") ? params.get("category") : "",
        search: params.get("search") ? params.get("search") : "",
        page: params.get("page") ? params.get("page") : 1,
        perPage: params.get("perPage") ? params.get("perPage") : 8,
        last: 1,
    });

	const getArticlesAPI = useCallback(async () => {
        const category = params.get("category") ? params.get("category") : "";
		let response;
        const paramsQuery = `category=${category}&search=${query.search}&page=${query.page}&perPage=${query.perPage}`;
		if (category == "project") {
			response = await getLatestProjects(paramsQuery);
		} else {
			response = await getArticles(paramsQuery);
		}
		if (response.error) {
			toast.error(response.message);
		} else {
			setArticles(response.data);
            setPagination({
                currentPage: response.currentPage,
                lastPage: response.lastPage,
                nextPage: response.lastPage!=1 && response.currentPage!=response.lastPage?true:false,
                prevPage: response.currentPage!=1?true:false,
                totalPage: response.lastPage,
            });
            setQueries({...query, page:response.currentPage, last: response.lastPage});
            console.log('GET ARTICLES', response.data);
		}
	}, [query]);
    const handlePage = (page: number) => {
        setLoading(true);
       
        setQueries({...query, page: page});
        params.set("page", page.toString());
        console.log('params', params.toString());
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }

	useEffect(() => {
        getArticlesAPI();
        setTimeout(() => {
            setLoading(false);
        }, 600);
	}, [loading]);
    

   

	return (
		<>
			<Navbar />
			<div>
				<div className=" snap-none container mx-auto justify-center items-center">
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
                    {!loading ? articles.length > 0 ? (
						<div>
							<div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-y-10 gap-x-6 mt-10 ">
							{articles.map((article: ArticleItemInterface) => {
							return (
								<ArticleCard
									key={article.id}
									title={article.title}
									image={article.image}
									createdAt={article.createdAt}
									slug={article.slug}
									id={article.id}
								/>
							);
						})}
							</div>
							<div
								className="w-full mt-10 mb-10 flex justify-center"
								id="pagination"
							>
								<nav aria-label="Page navigation example">
									<ul className="inline-flex -space-x-px text-base h-10">
										<li>
											<button
                                                 disabled={pagination.currentPage == 1}
												onClick={() => handlePage(pagination.currentPage-1)}
												className={"flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"+(pagination.currentPage == 1 ? " cursor-not-allowed bg-background" : "")}
											>
												Previous
											</button>
										</li>

                                        {pagination.totalPage > 1 && pagination.currentPage - 1 != 0 ? (<li >
											<a
												
												className="flex  items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer  hover:bg-background hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
											>
												{pagination.currentPage -1 }
											</a>
										</li>) : (<></>)}
    
										<li >
											<a
												
												className="flex  items-center justify-center px-4 h-10  text-black bg-primary border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
											>
												{pagination.currentPage}
											</a>
										</li>

                                        {pagination.totalPage > 1 && pagination.currentPage + 1 <= pagination.totalPage ? (<li >
											<a
												
												className="flex  items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer  hover:bg-background hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
											>
												{pagination.currentPage + 1 }
											</a>
										</li>) : (<></>)}
										<li>
											<button
                                                disabled={pagination.currentPage == pagination.lastPage}
												onClick={() => handlePage(pagination.currentPage+1)}
                                            className={"flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 rounded-e-lg hover:bg-background hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"+(pagination.currentPage == pagination.lastPage ? " cursor-not-allowed bg-background" : "")}
											>
												Next
											</button>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center">
							<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
								Sorry, we couldn't find any results for this search.
							</h1>
						</div>
					)
                     : (
                        <div className="flex flex-col h-[60vh] items-center justify-center">
                            <h1 className="text-2xl my-auto font-bold text-gray-900 dark:text-white">
                                <img src="/img/loading.gif" alt="loading" />
                            </h1>
                        </div>
                    )}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Transition(SearchArticle);
