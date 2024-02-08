import styled from "styled-components";
import {theme} from "../theme/theme";

const ContactContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${theme.Secondary_bg};
	@media (max-width: 600px) {
		height: auto;
	}
`;
const FormConatiner = styled.div`
	width: 60%;
	height: auto;
	padding: 10px;
	border: solid 1.5px ${theme.Highlight};
	border-radius: 10px;
	margin-bottom: 50px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;
const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const FormFields = styled.div`
	width: 100%;
	padding: 20px;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
const ButtonDiv = styled.div`
	width: 100%;
	padding: 20px;
	height: auto;
	text-align: end;
`;
const Input = styled.input`
	width: 100%;
	height: auto;
	padding: 10px;
	background: inherit;
	border: solid 1px ${theme.Main};
	border-radius: 8px;
	color: ${theme.Main};
	font-size: 1.3rem;
`;
const TextArea = styled.textarea`
	width: 100%;
	height: auto;
	padding: 10px;
	background: inherit;
	border: solid 1px ${theme.Main};
	border-radius: 8px;
	color: ${theme.Main};
	font-size: 1.3rem;
`;
export {
	ContactContainer,
	FormConatiner,
	Form,
	FormFields,
	ButtonDiv,
	Input,
	TextArea,
};
