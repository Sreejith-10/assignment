import {styled} from "styled-components";
import {theme} from "../theme/theme";

const AboutContianer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		height: auto;
		margin-top: 100px;
	}
`;
const AboutSection = styled.div`
	height: auto;
	width: 80%;
	display: flex;
	flex-direction: row;
	gap: 50px;
	@media (max-width: 600px) {
		width: 100%;
		height: auto;
		flex-direction: column;
	}
`;

const AboutP = styled.p`
	color: ${theme.Main};
	font-size: 30px;
`;
export {AboutContianer, AboutSection, AboutP};
