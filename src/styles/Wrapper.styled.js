import {styled} from "styled-components";
import {theme} from "../theme/theme";

const PageContatiner = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	z-index: 1;
	background: ${theme.Background};
	color: ${theme.Main};
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyleWrapper = styled.div`
	width: 65%;
	height: auto;
	@media (max-width: 600px) {
		width: 90%;
	}
`;
const PageWrapper = styled.div`
	width: 50%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 600px) {
		width: 90%;
	}
`;

export {PageContatiner, StyleWrapper, PageWrapper};
