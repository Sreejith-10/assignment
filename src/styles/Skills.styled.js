import styled from "styled-components";
import {theme} from "../theme/theme";

const SkillsConatier = styled.div`
	width: 100%;
	height: 100vh;
	background: ${theme.Secondary_bg};
	color: ${theme.Main};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 200px;
	@media (max-width: 600px) {
		height: auto;
		margin-bottom: 0;
	}
`;
const SkillsSection = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SkillItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 30px;
	margin-bottom: 100px;
	@media (max-width: 600px) {
		width: 100%;
		flex-direction: column;
	}
`;

const SkillTitle = styled.div`
	width: 100%;
	height: auto;
	text-align: center;
	padding: 15px 0px;
	font-size: 1.3rem;
`;
const SkillUl = styled.ul`
	width: 100%;
	height: auto;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
`;
const SkillLi = styled.li`
	list-style: none;
	padding: 10px;
	background: ${theme.Secondary_bg};
	padding: 10px;
	border-radius: 8px;
	border: solid 1.5px ${theme.Highlight};
`;

export {SkillTitle, SkillsConatier, SkillsSection, SkillItem, SkillUl, SkillLi};
