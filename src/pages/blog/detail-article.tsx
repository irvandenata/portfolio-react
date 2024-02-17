/* eslint-disable react-refresh/only-export-components */
import { Link, useParams } from "react-router-dom";
import Transition from "../../components/molecules/Transition";
import { Footer } from "../../components/organisms/Footer";
import { Navbar } from "../../components/organisms/Navbar";
import { useCallback, useEffect, useState } from "react";
import { genereateImageUrl, getArticleBySlug } from "../../services/home";
import { toast } from "react-toastify";
import { convertSnakeToCamel } from "../../functions/convert";
import { ArticleDetail } from "../../services/data-types";
import { generateIndonesianDate } from "../../functions/helper";
import GenerateHTML from "../../components/atoms/GenerateHTML";

const DetailArticle = () => {
    const {slug} = useParams();
    const [article, setArticle] = useState<ArticleDetail>();
    const getArticleBySlugAPI = useCallback(async (slug:string) => {
        const response = await getArticleBySlug(slug);
        if (response.error) {
           toast.error(response.message);
        }else {

            const result = convertSnakeToCamel(response.data.data);
            setArticle(result);
        }
    }
    , [slug]);

    useEffect(() => {
        if(slug)
        getArticleBySlugAPI(slug);
        else
        //redirect to 404
        console.log('redirect to 404');
    }
    , []);
	return article?(
		<>
			<Navbar />
			<div
				className=" container min-h-screen mx-auto flex-column justify-center mt-32"
				
			>
				<div>
					<nav
						className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-background dark:bg-gray-800 dark:border-gray-700"
						aria-label="Breadcrumb"
					>
						<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
							<li className="inline-flex items-center">
								<Link to={"/"} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
								>
									<svg
										className="w-3 h-3 me-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
									</svg>
									Home
								</Link>
							</li>
							<li>
								<div className="flex items-center">
									<svg
										className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
									<Link
										to="/blog"
										className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white hover:text-primary dark:text-gray-400 "
									>
										Article
									</Link>
								</div>
							</li>
							<li aria-current="page">
								<div className="flex items-center">
									<svg
										className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
									<span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        {article!.category?.name}
									</span>
								</div>
							</li>
						</ol>
					</nav>
				</div>
				<div className="w-full mt-5 ">
					<img
						className="rounded-[1rem] p-1 w-screen max-h-screen object-cover"
						src={article!.image?genereateImageUrl(article!.image):''}
						alt="Article"
					/>
				</div>
				<div className="title mt-10 sm:mt-5 text-left">
					<h1 className="text-3xl sm:text-lg font-bold">
						{article!.title}
					</h1>
					<h2 className="text-lg sm:text-lg font-semibold mt-4">{article!.source}</h2>
					<p>{generateIndonesianDate(article!.createdAt)}</p>
				</div>
				<div className="body mt-10 mb-10 text-justify">
					<GenerateHTML item={article!.body}/>
				</div>
			</div>
			<Footer />
		</>
	):<div></div>;
};

export default Transition(DetailArticle);
