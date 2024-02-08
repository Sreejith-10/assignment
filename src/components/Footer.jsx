import {
	FooterContainer,
	FooterCopyRight,
	FooterIcons,
	FooterNav,
	FooterNavItems,
	FooterWrapper,
} from "../styles/Footer.styled";
import {FaGithub, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa6";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterNav>
					<FooterNavItems href="#home">Home</FooterNavItems>
					<FooterNavItems href="#about">About</FooterNavItems>
					<FooterNavItems href="#skills">Skills</FooterNavItems>
					<FooterNavItems href="#experience">Experience</FooterNavItems>
					<FooterNavItems href="#achievements">Achievements</FooterNavItems>
					<FooterNavItems href="#education">Education</FooterNavItems>
					<FooterNavItems href="#contact">Contact</FooterNavItems>
				</FooterNav>
				<FooterIcons>
					<FaGithub size={30} />
					<FaFacebook size={30} />
					<FaLinkedin size={30} />
					<FaInstagram size={30} />
				</FooterIcons>
				<FooterCopyRight>2024 Developer. All rights reserved.</FooterCopyRight>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
