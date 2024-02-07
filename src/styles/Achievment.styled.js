import styled from "styled-components";
import {theme} from "../theme/theme";

const AchievementContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${theme.Secondary_bg};
	@media (max-width: 600px) {
		height: auto;
	}
`;

const CapsuleTitle = styled.div`
	width: 70%;
	font-size: 1.2rem;
	height: auto;
`;
const CapsuleTime = styled.div`
	width: 30%;
	font-size: 1rem;
	height: auto;
	display: flex;
	align-items: start;
	justify-content: center;
`;

export {AchievementContainer, CapsuleTitle, CapsuleTime};
