import React from 'react'
import {
	ProductButton,
	ProductCard,
	ProductDesc,
	ProductImg,
	ProductInfo,
	ProductHeading,
	ProductPrice,
	ProductsContainer,
	ProductTitle,
	ProductWrapper,
} from './ProductsElements'

const Products = ({ heading, data }) => {
	return (
		<ProductsContainer>
			<ProductHeading>{heading}</ProductHeading>
			<ProductWrapper>
				{data.map((product) => (
					<ProductCard key={product.id}>
						<ProductImg src={product.img} alt={product.alt} />
						<ProductInfo>
							<ProductTitle>{product.name}</ProductTitle>
							<ProductDesc>{product.desc}</ProductDesc>
							<ProductPrice>{product.price}</ProductPrice>
							<ProductButton>{product.button}</ProductButton>
						</ProductInfo>
					</ProductCard>
				))}
			</ProductWrapper>
		</ProductsContainer>
	)
}

export default Products
