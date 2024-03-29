import React from "react";
import {AboutContianer, AboutP, AboutSection} from "../styles/About.styled";
import {Title} from "../styles/Common.styled";
import {NavButton} from "../styles/Navbar.styled";
import {motion} from "framer-motion";
import {user} from "../constants/data";

const About = () => {
	return (
		<>
			<AboutContianer id="about">
				<Title>About</Title>
				<AboutSection>
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
						whileInView={"animate"}
						transition={{duration: 0.5, delay: 0.5}}
						viewport={{once: true}}
						className="LeftSide">
						<img
							src="/cartoonish-3d-animation-boy-glasses-with-blue-hoodie-orange-shirt_899449-25777.jpg"
							alt="not found"
							style={{
								borderRadius: "75% 47% 42% 83% / 57% 45% 19% 47%",
								boxShadow: "#7f5af0 0px 4px 24px",
							}}
						/>
					</motion.div>
					<motion.div
						variants={{
							initial: {
								opacity: 0,
								translateX: 200,
							},
							animate: {
								opacity: 1,
								translateX: 0,
							},
						}}
						initial="initial"
						whileInView={"animate"}
						transition={{duration: 0.5, delay: 0.5}}
						viewport={{once: true}}
						className="RightSide">
						<AboutP>{user.about}</AboutP>
						<NavButton>Resume</NavButton>
					</motion.div>
				</AboutSection>
			</AboutContianer>
		</>
	);
};

export default About;
