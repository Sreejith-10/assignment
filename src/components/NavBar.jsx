import React, {useState} from "react";
import {FaSafari} from "react-icons/fa6";
import {
	NavBtn,
	NavButton,
	NavContainer,
	NavIcon,
	NavLi,
	NavList,
	NavUl,
	NavWrapper,
} from "../styles/Navbar.styled";
import {useParams} from "react-router-dom";

const NavBar = () => {
	const [path, setPath] = useState("home");
	return (
		<NavContainer>
			<NavWrapper>
				<NavIcon>
					<FaSafari size={30} />
				</NavIcon>
				<NavList>
					<NavUl>
						<NavLi
							onClick={() => setPath("home")}
							href="#home"
							className={path === "home" && "active"}>
							Home
						</NavLi>
						<NavLi
							onClick={() => setPath("about")}
							href="#about"
							className={path === "about" && "active"}>
							About
						</NavLi>
						<NavLi
							onClick={() => setPath("skills")}
							href="#skills"
							className={path === "skills" && "active"}>
							Skills
						</NavLi>
						<NavLi
							onClick={() => setPath("experience")}
							href="#experience"
							className={path === "experience" && "active"}>
							Experience
						</NavLi>
						<NavLi
							onClick={() => setPath("achievements")}
							href="#achievements"
							className={path === "achievements" && "active"}>
							Achievements
						</NavLi>
						<NavLi
							onClick={() => setPath("education")}
							href="#education"
							className={path === "education" && "active"}>
							Education
						</NavLi>
						<NavLi
							onClick={() => setPath("contact")}
							href="#contact"
							className={path === "contact" && "active"}>
							Contact
						</NavLi>
					</NavUl>
				</NavList>
				<NavBtn>
					<NavButton>Reach Me</NavButton>
				</NavBtn>
			</NavWrapper>
		</NavContainer>
	);
};

export default NavBar;
