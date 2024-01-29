import { Navbar } from "../../components/organisms/Navbar";
import { Header } from "../../components/organisms/Header";
import { TechStack } from "../../components/organisms/TechStack";
import { Project } from "../../components/organisms/Project";
import { GetInTouch } from "../../components/organisms/GetInTouch";
import { Footer } from "../../components/organisms/Footer";
import {Transition} from "../../components/atoms/transition";

const Home = () => {
	return (
		<div className="w-full ">
            <Navbar  />
            <Header />
            <TechStack />
            <Project />
            <GetInTouch />
            <Footer/>
		</div>
	);
};

export default Transition(Home);
