import styled from 'styled-components'

export const ProductsContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	background: #150f0f;
	color: #fff;
`

export const ProductWrapper = styled.div`
	max-width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	margin: 0 auto;

	@media screen and (max-width: 660px) {
		flex-direction: column;
		align-items: center;
	}
`

export const ProductCard = styled.div`
	line-height: 2;
	width: 100%;

	@media screen and (min-width: 1000px) {
		margin: 0 2rem;
	}
`

export const ProductImg = styled.img`
	height: 300px;
	width: 100%;
	object-fit: cover;
`

export const ProductHeading = styled.h1`
	font-size: clamp(2rem, 2.5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
`

export const ProductTitle = styled.div`
	font-weight: 400;
	font-size: 1.5rem;
`

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`

export const ProductDesc = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`

export const ProductPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`

export const ProductButton = styled.button`
	font-size: 1rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2 ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		color: #000;
	}
`
