import React from 'react'
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa'
import {
	FooterContainer,
	FooterWrap,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	SocialIconLink,
} from './FooterElements'

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/'>TRK</SocialLogo>
						<SocialIcons>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Youtube'>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
