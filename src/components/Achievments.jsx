import React from "react";
import {PageWrapper} from "../styles/Wrapper.styled";
import {Title} from "../styles/Common.styled";
import {achievements} from "../constants/data";
import {
	AchievementContainer,
	CapsuleTime,
	CapsuleTitle,
} from "../styles/Achievment.styled";
import {motion} from "framer-motion";
import "../Global.css";

const Achievments = () => {
	return (
		<AchievementContainer id="achievements">
			<PageWrapper>
				<Title>Achievements</Title>
				<div
					style={{
						display: "flex",
						gap: "30px",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						marginBottom: "100px",
					}}>
					{achievements.map((itme, i) => (
						<motion.div
							variants={{
								hiddenL: {
									opacity: 0,
									translateX: 500,
								},
								hiddenR: {
									opacity: 0,
									translateX: -500,
								},
								animate: {
									opacity: 1,
									translateX: 0,
								},
							}}
							transition={{ease: "easeOut", delay: i + 0.4}}
							initial={(i + 1) % 2 === 0 ? "hiddenL" : "hiddenR"}
							whileInView="animate"
							viewport={{once: true}}
							key={i}
							className="CapsuleContainer">
							<CapsuleTitle>{itme.item}</CapsuleTitle>
							<CapsuleTime>{itme.time}</CapsuleTime>
						</motion.div>
					))}
				</div>
			</PageWrapper>
		</AchievementContainer>
	);
};

export default Achievments;
