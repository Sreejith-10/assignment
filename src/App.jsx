import React from "react";
import {
	PageContatiner,
	PageWrapper,
	StyleWrapper,
} from "./styles/Wrapper.styled";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievments from "./components/Achievments";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./App.css";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const App = () => {
	return (
		<PageContatiner>
			<StyleWrapper>
				<NavBar />
				<Hero />
				<About />
			</StyleWrapper>
			<Skills />
			<Experience />
			<Achievments />
			<Education id="education" />
			<Contact />
			<Footer />
			<BottomNav />
		</PageContatiner>
	);
};

export default App;
