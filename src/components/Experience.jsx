import React from "react";
import {PageWrapper} from "../styles/Wrapper.styled";
import {Title} from "../styles/Common.styled";
import {
	Card,
	CardAbout,
	CardDate,
	CardTitle,
	ExperienceContainer,
} from "../styles/Experience.styled";
import "../Global.css";
import {workExperience} from "../constants/data";
import {motion} from "framer-motion";

const Experience = () => {
	return (
		<ExperienceContainer>
			<PageWrapper id="experience">
				<Title>Experince</Title>
				<motion.div className="TimeLineContainer">
					{workExperience.map((item, id) => (
						<motion.div
							variants={{
								initial: {
									opacity: 0,
									translateY: -400,
								},
								animate: {
									opacity: 1,
									translateY: 0,
								},
							}}
							initial="initial"
							viewport={{once: true}}
							transition={{delay: id + 0.2}}
							key={id}
							whileInView="animate"
							className={`CardConatiner ${
								(id + 1) % 2 === 0 ? "right" : "left"
							}`}>
							<Card>
								<div className="icon">{id + 1}</div>
								<CardTitle>{item.company}</CardTitle>
								<h5>{item.role}</h5>
								<CardDate>{item.duration}</CardDate>
								<h1 style={{fontSize: "15px"}}>Responsibilites</h1>
								<CardAbout>
									{item.responsibilities.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</CardAbout>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</PageWrapper>
		</ExperienceContainer>
	);
};

export default Experience;
