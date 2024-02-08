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
import {user} from "../constants/data";

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
								<SkillTitle>Hard Skills</SkillTitle>
								<SkillUl>
									{user.skills.hardSkilks.map((item, id) => (
										<SkillLi key={id}>{item}</SkillLi>
									))}
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
								<SkillTitle>Soft Skills</SkillTitle>
								<SkillUl>
									{user.skills.softSkills.map((item, id) => (
										<SkillLi key={id}>{item}</SkillLi>
									))}
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
