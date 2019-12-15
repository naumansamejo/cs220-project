import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from './components/imageSlider/imageSlider';
import './products.css';
import {product_images as pi} from './dummyData';
import productService from './services/productService';


function Product({match}){

    let {id} = useParams();

    const [product, setproduct] = useState(null);
    
    useEffect(() => {
        if (!product) {
            getProduct();
        };
    });

    useEffect(()=>{
        getProduct();
    }, [match.url]);


    

    const getProduct = async () => {
        let res = await productService.getProduct(id);
        setproduct(res);
    }
    



    return (
        
        product ?
        
        <div className="product_single row">
            <div className="c70">
                <div className="slider__big">
                    <ImageSlider images={ product.images } />
                </div>

                <div className="product__description">
                    {product.description}

                    <ul className="product__info">
                        <li>
                            <span>
                                Fit
                            </span>
                            {product.fit}
                        </li>
                        
                        <li>
                            <span>
                                Size
                            </span>
                            {product.size}
                        </li>
                        
                        <li>
                            <span>
                                Rating
                            </span>
                            {product.rating}/5
                        </li>


                    </ul>

                </div>
                
            </div>

            <div className="c30">
                <div className="product__side" >
                    <h2>
                        {product.title}
                    </h2>
                    <span className="product__price">
                        Rs. {product.price}
                    </span>
                </div>
            </div>
        </div>
        
        
        
        :
        <div>No product found!</div>
    ); 

}

export default Product;