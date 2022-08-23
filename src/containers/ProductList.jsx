import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	//products.shift() //Eliminando el primer elemento pq en image
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product =>{
					//console.log(product.id)
					return <ProductItem product={product} key={product.id} />
				}
				)}
			</div>
		</section>
	);
}

export default ProductList;
