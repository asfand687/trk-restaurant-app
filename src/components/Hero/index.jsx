import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
	HeroBtn,
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroItems,
	HeroP,
} from './HeroElements'

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<HeroContainer>
			<Navbar toggle={toggle} />
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<HeroContent>
				<HeroItems>
					<HeroH1>Greatest Tikka Ever</HeroH1>
					<HeroP>Ready at your service</HeroP>
					<HeroBtn>Learn More</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	)
}

export default Hero
