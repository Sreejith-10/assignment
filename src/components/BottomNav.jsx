import React, {useState} from "react";
import {GoHome} from "react-icons/go";
import {FaRegUser} from "react-icons/fa";
import {GrAchievement, GrWorkshop} from "react-icons/gr";
import {MdOutlineSchool} from "react-icons/md";
import {CiStar} from "react-icons/ci";
import {BottomNavContainer, BottomNavSection} from "../styles/BottomNav.styled";

const BottomNav = () => {
	const [path, setPath] = useState("home");
	return (
		<BottomNavContainer>
			<BottomNavSection>
				<a
					onClick={() => setPath("home")}
					href="#home"
					className={path === "home" ? "IconActive" : undefined}>
					<GoHome size={40} />
				</a>
				<a
					onClick={() => setPath("about")}
					href="#about"
					className={path === "about" ? "IconActive" : undefined}>
					<FaRegUser size={35} />
				</a>
				<a
					onClick={() => setPath("skills")}
					href="#skills"
					className={path === "skills" ? "IconActive" : undefined}>
					<CiStar size={40} />
				</a>
				<a
					onClick={() => setPath("experience")}
					href="#experience"
					className={path === "experience" ? "IconActive" : undefined}>
					<GrWorkshop size={35} />
				</a>
				<a
					onClick={() => setPath("achievements")}
					href="#achievements"
					className={path === "achievements" ? "IconActive" : undefined}>
					<GrAchievement size={35} />
				</a>
				<a
					onClick={() => setPath("education")}
					href="#education"
					className={path === "education" ? "IconActive" : undefined}>
					<MdOutlineSchool size={40} />
				</a>
			</BottomNavSection>
		</BottomNavContainer>
	);
};

export default BottomNav;
