import {styled} from "styled-components";
import {theme} from "../theme/theme";

const NavContainer = styled.nav`
	background: inherit;
	width: 100%;
	height: 100px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;

	@media (max-width: 600px) {
		display: none;
	}
`;

const NavWrapper = styled.div`
	width: 100%;
	height: 100%;
	border: solid 2px ${theme.Tertiary};
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.8);
`;

const NavIcon = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const NavList = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const NavBtn = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const NavUl = styled.ul`
	cursor: pointer;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50px;
`;
const NavLi = styled.a`
	color: ${theme.Main};
	font-size: 1.2rem;
	text-decoration: none;
	transition: ease-in-out 0.4s;
	&:hover {
		color: ${theme.Highlight};
	}
`;
const NavButton = styled.button`
	background: ${theme.Button};
	padding: 10px;
	font-size: 1rem;
	font-weight: 700;
	color: ${theme.Button_text};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border-radius: 8px;
	cursor: pointer;
	transition: ease-in-out 0.5s;
	&:active {
		scale: 0.5;
	}
`;

export {
	NavContainer,
	NavWrapper,
	NavIcon,
	NavList,
	NavBtn,
	NavUl,
	NavLi,
	NavButton,
};
