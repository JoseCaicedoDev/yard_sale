import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';

import addCartImage from "@icons/bt_add_to_cart.svg";

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);
	//console.log(product) => En este punto manda los productos

/* 	const [cart, setCart] = useState([]); */

	const handleClick = item =>{
		addToCart(item);
	}

/* 	console.log(product.images) */
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
