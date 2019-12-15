import React, { useState, useEffect } from "react";
import './products.css';
import Product from './components/product/product';
import { useParams } from "react-router-dom";
import productService from './services/productService';



function Products({match}) {

    const [products, setproducts] = useState(null);
    let product_category = useParams().category;
    
	useEffect(() => {
		if (!products) {
			getProducts();
		};
    });

    useEffect(()=>{
        getProducts();
    }, [match.url]);


	

	const getProducts = async () => {
        let res = await productService.getAll(product_category);
        setproducts(res);
	}
    

	return (
		<ul className="products__list list">
			{(products && products.length > 0) ? (
                products.map( product =>(
                    <Product product={product} collapse/>
                ))
			) : (
					<p>No products found</p>
				)}
        </ul>
    );

}


export default Products;