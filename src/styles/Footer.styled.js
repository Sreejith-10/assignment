import styled from "styled-components";

const FooterContainer = styled.div`
	width: 100%;
	height: auto;
	margin-top: 70px;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const FooterWrapper = styled.div`
	width: 65%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
const FooterTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FooterNav = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	@media (max-width: 600px) {
		flex-wrap: wrap;
	}
`;
const FooterNavItems = styled.a`
	text-decoration: none;
	color: white;
	font-size: 20px;
	transition: all ease 0.5s;
	cursor: pointer;
	&:hover {
		color: ${({theme}) => theme.primary};
	}
	@media (max-width: 600px) {
		font-size: 18px;
	}
`;
const FooterIcons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;
const FooterCopyRight = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-bottom: 50px;
	font-size: 1.5rem;
	color: lightgray;
	@media (max-width: 600px) {
		font-size: 1rem;
		margin-bottom: 20px;
	}
`;

export {
	FooterContainer,
	FooterCopyRight,
	FooterIcons,
	FooterNav,
	FooterNavItems,
	FooterTitle,
	FooterWrapper,
};
