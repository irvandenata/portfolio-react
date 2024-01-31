import { WorkExpProps } from "../../../services/data-types";
import Moment from "moment";
export default function WorkExperience(props: WorkExpProps) {
	const { title, subTitle, description, startDate, endDate } = props;
	const format = (date: string, format: string) => {
		return Moment(date).format(format);
	};
	return (
		<div>
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
					{title}
				</h3>
				<p className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">
					{subTitle}
				</p>
				<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
					{format(startDate, "MMM YYYY")} - {format(endDate, "MMM YYYY")}
				</time>
				<div className="mb-4 text-base font-thin text-sm text-gray-500 dark:text-gray-400 mt-5">
					<div dangerouslySetInnerHTML={{ __html: description }}></div>
				</div>
			</li>
		</div>
	);
}
