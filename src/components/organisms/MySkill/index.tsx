import { useCallback, useEffect, useState } from "react";
import { getExperiences, getTechStacks } from "../../../services/home";
import { toast } from "react-toastify";
import TechStack from "../../molecules/TechStack";
import WorkExperience from "../../molecules/WorkExperience";
import { WorkExpItem } from "../../../services/data-types";
import { convertSnakeToCamel } from "../../../functions/convert";
export const MySkill = () => {
	const [experiences, setExperiences] = useState([]);
	const [techStacks, setTechStack] = useState([]);
	const getExperiencesAPI = useCallback(async () => {
		const response = await getExperiences();
		if (response.error) {
			toast.error(response.message);
		} else {
			setExperiences(response.data.data);
		}
	}, []);
	const getTechStackAPI = useCallback(async () => {
		const response = await getTechStacks();
		if (response.error) {
			toast.error(response.message);
		} else {
           const result =  convertSnakeToCamel(response.data.data);
			setTechStack(result);
		}
	}, []);


	useEffect(() => {
		getExperiencesAPI();
		getTechStackAPI();
	}, []);


	return (
		<div
			className="snap-start container min-h-screen mx-auto lg:pt-[100px]  flex items-center sm:py-16"
			id="tech-stack"
		>
			<div className="lg:flex w-full">
				<div className="lg:basis-2/3 ">
					<h1 className="text-3xl font-bold">
						Work <span className="text-primary">Experiences</span>
					</h1>
					<div className="flex-row mt-10">
						<ol className="relative -z-10 border-s border-background dark:border-gray-700">
                            {experiences.map((experience: WorkExpItem) => {
                                return (
                                    <WorkExperience
                                        key={experience.id}
                                        title={experience.title}
                                        subTitle={experience.subTitle}
                                        description={experience.description}
                                        startDate={experience.startDate}
                                        endDate={experience.endDate}
                                    />
                                );
                            })}
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
								{techStacks.map((techStack : WorkExpItem) => {
									if (techStack.subTitle === "Frontend") {
										return (
											<TechStack
												key={techStack.id}
												id={techStack.id}
												title={techStack.title}
												icon={techStack.icon}
											/>
										);
									} else {
										return;
									}
								})}
							</div>
						</div>
						<div className="mt-16">
							<h2 className="text-lg">Backend</h2>
							<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-5 md:gap-3 mt-4">
								{techStacks.map((techStack:WorkExpItem) => {
									if (techStack.subTitle === "Backend") {
										return (
											<TechStack
												key={techStack.id}
												id={techStack.id}
												title={techStack.title}
												icon={techStack.icon}
											/>
										);
									} else {
										return;
									}
								})}
							</div>
						</div>
						<div className="mt-16">
							<h2 className="text-lg">Others</h2>
							<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 gap-5 md:gap-3 mt-4">
								{techStacks.map((techStack: WorkExpItem) => {
									if (techStack.subTitle === "Others") {
										return (
											<TechStack
												key={techStack.id}
												id={techStack.id}
												title={techStack.title}
												icon={techStack.icon}
											/>
										);
									} else {
										return;
									}
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
