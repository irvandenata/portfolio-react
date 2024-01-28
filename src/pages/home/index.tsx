import { Link } from "react-router-dom";
import { Navbar } from "../../components/organisms/Navbar";
import { Header } from "../../components/organisms/Header";
import { TechStack } from "../../components/organisms/TechStack";
import { Project } from "../../components/organisms/Project";

const Home = () => {
	const handleClick = () => {
		console.log("clicked");
	};
	return (
		<div className="w-full">
            <Navbar  />
            <Header />
            <TechStack />
            <Project />
			<Link to="/blog" >
				<button  onClick={handleClick}>Click me</button>
			</Link>
		</div>
	);
};

export default Home;
