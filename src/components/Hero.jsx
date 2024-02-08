import React from "react";
import {
	HeroBg,
	HeroContainer,
	HeroDesc,
	HeroTitle,
} from "../styles/Hero.styled";
import {BsLinkedin, BsFacebook, BsGithub, BsChat} from "react-icons/bs";
import {NavButton} from "../styles/Navbar.styled";
import {motion} from "framer-motion";
import "../J.css";
import "../Global.css";
import {user} from "../constants/data";

const Hero = () => {
	return (
		<>
			<div className="l">
				<div
					id="ht"
					style={{
						width: "100%",
						height: "100vh",
						position: "absolute",
						top: "0",
						left: "0",
					}}>
					<div id="stars"></div>
					<div id="stars2"></div>
					<div id="stars3"></div>
				</div>
				<HeroContainer id="home">
					<HeroBg>
						<motion.div
							variants={{
								initial: {
									opacity: 0,
								},
								animate: {
									opacity: 1,
								},
							}}
							initial="initial"
							animate="animate"
							transition={{ease: "easeIn", delay: ".2"}}
							className="HeroF">
							<div className="heading">
								<HeroTitle>Hello Iam,</HeroTitle>{" "}
								<HeroTitle style={{color: "#7f5af0"}}>{user.name}</HeroTitle>
							</div>
							<HeroDesc>{user.title}</HeroDesc>
						</motion.div>
						<motion.div
							variants={{
								initial: {
									opacity: 0,
									translateX: -200,
								},
								animate: {
									opacity: 1,
									translateX: 0,
								},
							}}
							initial="initial"
							animate="animate"
							transition={{ease: "easeIn", delay: "1"}}
							className="HeroButtons">
							<NavButton>
								Say Hello <BsChat size={20} />
							</NavButton>
						</motion.div>
						<motion.div
							variants={{
								initial: {
									opacity: 0,
									translateX: -200,
								},
								animate: {
									opacity: 1,
									translateX: 0,
								},
							}}
							initial="initial"
							animate="animate"
							transition={{ease: "easeIn", delay: "1"}}
							className="HeroSocials">
							<h3>Follow me on</h3>
							<BsFacebook size={30} />
							<BsLinkedin size={30} />
							<BsGithub size={30} />
						</motion.div>
					</HeroBg>
				</HeroContainer>
			</div>
		</>
	);
};

export default Hero;

// <div id="html">
// 	<div id="stars"></div>
// 	<div id="stars2"></div>
// 	<div id="stars3"></div>
// 	<div id="title">
// 		<span>Heelo</span>
// 	</div>
// </div>
