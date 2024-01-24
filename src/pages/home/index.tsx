import { Link } from "react-router-dom";

const Home = () => {
	const handleClick = () => {
		console.log("clicked");
	};
	return (
		<div>
			<h1>Home</h1>
			<p>Home page content</p>
			<Link to="/blog">
				<button onClick={handleClick}>Click me</button>
			</Link>
		</div>
	);
};

export default Home;
