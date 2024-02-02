import { Navbar } from "../../components/organisms/Navbar";
import { Header } from "../../components/organisms/Header";
import { MySkill } from "../../components/organisms/MySkill";
import { Project } from "../../components/organisms/Project";
import { GetInTouch } from "../../components/organisms/GetInTouch";
import { Footer } from "../../components/organisms/Footer";
import Transition from "../../components/molecules/Transition";

const Home = () => {
	return (
		<div className="w-full ">
            <Navbar  />
            <Header />
            <MySkill />
            <Project />
            <GetInTouch />
            <Footer/>
		</div>
	);
};

export default Transition(Home);
