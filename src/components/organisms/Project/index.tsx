import { Link } from "react-router-dom";
import { ArticleItem } from "../../../services/data-types";
import { useEffect, useState } from "react";
import { getLatestProjects } from "../../../services/home";
import { convertSnakeToCamel } from "../../../functions/convert";
import { toast } from "react-toastify";
import ArticleCard from "../../molecules/ArticleCard";

export const Project = () => {
	const [projects, setProjects] = useState<ArticleItem[]>([]);
	const getLatestProjectsAPI = async () => {
		const response = await getLatestProjects();
		const result = convertSnakeToCamel(response.data.data.data);
		console.log(result);
		if (response.error) {
			toast.error(response.message);
		} else {
			setProjects(result);
		}
	};
	useEffect(() => {
		getLatestProjectsAPI();
	}, []);

	return (
		<div className="snap-always snap-center container min-h-screen mx-auto flex items-center sm:py-16">
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
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</Link>
				</div>
				<div className="flex">
					<div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-y-10 gap-x-6 mt-10 w-full">
						{projects.map((project: ArticleItem) => {
							return (
								<ArticleCard
									key={project.id}
									title={project.title}
									image={project.image}
									createdAt={project.createdAt}
									slug={project.slug}
									id={project.id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
