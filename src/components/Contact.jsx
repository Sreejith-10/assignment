import React from "react";
import {PageWrapper} from "../styles/Wrapper.styled";
import {Title} from "../styles/Common.styled";
import {
	ButtonDiv,
	ContactContainer,
	Form,
	FormConatiner,
	FormFields,
	Input,
	TextArea,
} from "../styles/Contact.styled";
import {NavButton} from "../styles/Navbar.styled";

const Contact = () => {
	return (
		<ContactContainer id="contact">
			<PageWrapper>
				<Title>Contact</Title>
				<FormConatiner>
					<Form action="">
						<FormFields>
							<label htmlFor="">Name</label>
							<Input type="text" placeholder="Enter your name" />
						</FormFields>
						<FormFields>
							<label htmlFor="">Email</label>
							<Input type="text" placeholder="Enter your email" />
						</FormFields>
						<FormFields>
							<label htmlFor="">Message</label>
							<TextArea name="" id="" cols="30" rows="10" />
						</FormFields>
						<ButtonDiv>
							<NavButton>Submit</NavButton>
						</ButtonDiv>
					</Form>
				</FormConatiner>
			</PageWrapper>
		</ContactContainer>
	);
};

export default Contact;
