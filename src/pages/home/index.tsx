import { Link } from "react-router-dom";
import { Navbar } from "../../components/organisms/Navbar";

const Home = () => {
	const handleClick = () => {
		console.log("clicked");
	};
	return (
		<div className="w-full">
            <Navbar />
			<h1 className="text-red">Home</h1>
			<p>Home page content</p> 
			<Link to="/blog">
				<button onClick={handleClick}>Click me</button>
			</Link>
		</div>
	);
};

export default Home;
