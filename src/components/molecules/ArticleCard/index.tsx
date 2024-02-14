import { Link } from "react-router-dom";
import { ArticleCard} from "../../../services/data-types";
import { genereateImageUrl } from "../../../services/home";

export default function ArticleCard(props: ArticleCard) {
    const { title,image,slug } = props;
	return (
		<div className="max-w-sm bg-background border-2 border-gray rounded-lg hover:border-primary shadow dark:bg-gray-800 dark:border-gray-700 text-left z-[1] h-[350px] relative">
			<Link to="/detail" className="">
				<img
					className="rounded-lg p-1"
					style={{
						objectFit: "cover",
						width: "100%",
						height: "185px",
					}}
					src={genereateImageUrl(image)}
					alt="Gambar"
				/>
			</Link>
			<div className="p-5">
				<a href="/" className="">
					<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</a>
			</div>
			<Link
				to="/detail"
				className="inline-flex absolute bottom-2 left-2 items-center p-2 text-sm font-medium bg-gray  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-primary hover:text-black"
			>
				Read more
			</Link>
		</div>
	);
}
