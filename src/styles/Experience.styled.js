import styled, {keyframes} from "styled-components";
import {theme} from "../theme/theme";

const ExperienceContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 300px;
	@media (max-width: 600px) {
		width: 100%;
		margin-bottom: 100px;
	}
`;

const Card = styled.div`
	width: 90%;
	background: inherit;
	height: 100%;
	padding: 10px;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 10px;
	border: solid 2px ${theme.Highlight};
	box-shadow: ${theme.Secondary_bg} 0px 2px 12px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
const CardTitle = styled.div`
	width: auto;
	font-size: 1.2rem;
`;
const CardDate = styled.small``;
const CardAbout = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
`;

export {ExperienceContainer, CardTitle, CardDate, CardAbout, Card};
