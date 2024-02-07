import React from "react";
import {Title} from "../styles/Common.styled";
import {PageWrapper} from "../styles/Wrapper.styled";
import {
	SkillItem,
	SkillLi,
	SkillTitle,
	SkillUl,
	SkillsConatier,
	SkillsSection,
} from "../styles/Skills.styled";
import {motion} from "framer-motion";
import "../Global.css";

const Skills = () => {
	return (
		<>
			<SkillsConatier id="skills">
				<PageWrapper>
					<Title>Skills</Title>
					<SkillsSection>
						<SkillItem>
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
								className="Skill">
								<SkillTitle>Soft skills</SkillTitle>
								<SkillUl>
									<SkillLi>Observation</SkillLi>
									<SkillLi>Decision</SkillLi>
									<SkillLi>Multi-tasking</SkillLi>
									<SkillLi>Communication</SkillLi>
									<SkillLi>making</SkillLi>
								</SkillUl>
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
								className="Skill">
								<SkillTitle>Hard Skills</SkillTitle>
								<SkillUl>
									<SkillLi>IT Recruitment</SkillLi>
									<SkillLi>Vulnerability Assessment</SkillLi>
									<SkillLi>Red and Blue Team Operations</SkillLi>
									<SkillLi>Penetration Testing</SkillLi>
									<SkillLi>Cyber Security Training</SkillLi>
									<SkillLi>Cyber Security Strategy building</SkillLi>
								</SkillUl>
							</motion.div>
						</SkillItem>
					</SkillsSection>
				</PageWrapper>
			</SkillsConatier>
		</>
	);
};

export default Skills;
