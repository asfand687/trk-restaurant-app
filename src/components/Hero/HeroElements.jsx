import styled from 'styled-components'
import ImgBG from '../../images/bg.jpg'

export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${ImgBG});
	height: 100vh;
	width: 100%;
	background-position: center 80%;
	background-size: cover;
`

export const HeroContent = styled.div`
	height: calc(100vh - 80px);
	max-height: 100%;
	width: 100%;
	padding: 0rem 2rem;
`

export const HeroItems = styled.article`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%:
  padding: 0 2rem;
  max-width: 650px;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 800;


  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`

export const HeroH1 = styled.h2`
	// font-size: clamp(2.5rem, 10vw, 5rem);
	font-size: 5rem;
	margin-bottom: 1rem;
	box-shadow: 3px 5px #e9ba23;
`

export const HeroP = styled.p`
	// font-size: clamp(2rem, 2.5vw, 3rem);
	font-size: 3rem;
	margin-bottom: 2rem;
`

export const HeroBtn = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`
