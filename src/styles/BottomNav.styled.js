import styled from "styled-components";
import {theme} from "../theme/theme";

const BottomNavContainer = styled.div`
	width: 100%;
	height: 80px;
	position: fixed;
	display: none;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (min-width: 600px) {
		display: none;
	}
`;

const BottomNavSection = styled.div`
	width: 95%;
	height: 80%;
	background: rgba(0, 0, 0, 0.7);
	border: solid 1px ${theme.Tertiary};
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export {BottomNavContainer, BottomNavSection};
