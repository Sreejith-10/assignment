import styled from "styled-components";
import {theme} from "../theme/theme";

const EducationContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		height: auto;
	}
`;

const EducationCard = styled.div`
	width: 80%;
	height: auto;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 2px ${theme.Highlight};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap: 10px;
`;
const Institue = styled.div`
	font-size: 20px;
`;
const Cousrse = styled.div`
	font-size: 20px;
`;
const Time = styled.div``;

export {EducationContainer, EducationCard, Institue, Cousrse, Time};
