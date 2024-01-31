import { useCallback, useEffect, useState } from "react";
import { onMouseEnter, onMouseLeave } from "../../../functions/mouseHandler";
import { getExperiences, getTechStacks } from "../../../services/home";
import { toast } from "react-toastify";
import TechStack from "../../molecules/TechStack";
import WorkExperience from "../../molecules/WorkExperience";
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
			setTechStack(response.data.data);
		}
	}, []);
	useEffect(() => {
		getExperiencesAPI();
		getTechStackAPI();
	}, []);

	useEffect(() => {
		console.log(experiences);
		console.log(techStacks);
	}, [experiences, techStacks]);

	return (
		<div
			className="snap-center snap-alaways container min-h-screen mx-auto  flex items-center sm:py-16"
			id="tech-stack"
		>
			<div className="lg:flex w-full">
				<div className="lg:basis-2/3 ">
					<h1 className="text-3xl font-bold">
						Work <span className="text-primary">Experiences</span>
					</h1>
					<div className="flex-row mt-10">
						<ol className="relative -z-10 border-s border-background dark:border-gray-700">
                            {experiences.map((experience) => {
                                return (
                                    <WorkExperience
                                        key={experience.id}
                                        title={experience.title}
                                        subTitle={experience.sub_title}
                                        description={experience.description}
                                        startDate={experience.start_date}
                                        endDate={experience.end_date}
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
								{techStacks.map((techStack) => {
									if (techStack.sub_title === "Frontend") {
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
								{techStacks.map((techStack) => {
									if (techStack.sub_title === "Backend") {
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
								{techStacks.map((techStack) => {
									if (techStack.sub_title === "Others") {
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
