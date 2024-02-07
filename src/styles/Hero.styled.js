import {theme} from "../theme/theme";
import {styled} from "styled-components";

const HeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: -1;
`;

const HeroBg = styled.div`
	/* background: #000; */
	height: 70%;
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;
const HeroTitle = styled.h1`
	font-size: 4rem;
	color: ${theme.Main};
`;
const HeroDesc = styled.h3`
	font-size: 3rem;
	color: ${theme.Main};
`;

export {HeroContainer, HeroBg, HeroTitle, HeroDesc};
