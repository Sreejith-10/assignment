import React from "react";
import {PageWrapper} from "../styles/Wrapper.styled";
import {Title} from "../styles/Common.styled";
import {
	Cousrse,
	EducationCard,
	EducationContainer,
	Institue,
	Time,
} from "../styles/Education.styled";
import {education} from "../constants/data";
import "../Global.css";
import {motion} from "framer-motion";

const Education = () => {
	return (
		<EducationContainer id="education">
			<PageWrapper>
				<Title>Education</Title>
				<div className="TimeLineContainer">
					{education.map((item, id) => (
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
							transition={{delay: id + 1}}
							key={id}
							whileInView="animate"
							className={`CardConatiner ${
								(id + 1) % 2 === 0 ? "right" : "left"
							}`}>
							<EducationCard>
								<div className="icon">{id + 1}</div>
								<Cousrse>{item.course}</Cousrse>
								<Institue>{item.institue}</Institue>
								<Time>{item.completion}</Time>
							</EducationCard>
						</motion.div>
					))}
				</div>
			</PageWrapper>
		</EducationContainer>
	);
};

export default Education;
