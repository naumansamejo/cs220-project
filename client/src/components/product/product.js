import React from 'react';
import {Link} from 'react-router-dom';
import ImageSlider from '../imageSlider/imageSlider';


const Product = ({product, collapse=false}) => {

    let {id, rating, size, description, title, date_added, type, price} = product;
    
    return (
        
        <li key={id} className="list__item">
            <Link className="product__link" to={`/product/${id}`} >
                
                
                <div className="product" >

                    <figure>
                        <ImageSlider images={  product.images } />
                    </figure>

                    <h3 className="product__name">
                        {title}
                    </h3>
                    <div></div>
                    <strong className="product__price">
                        Rs. {price}
                    </strong>

                    {
                        collapse ? "" :
                        
                        <div>
                            <p className="product__description">{description}</p>

                            <ul>
                                <li>
                                    <strong>Size: </strong> {size}
                                </li>
                                <li>
                                    <strong>Rating: </strong> {rating}
                                </li>
                                <li>
                                    <strong>Type: </strong> {type}
                                </li>
                                <li>
                                    <strong>Date: </strong> A date!
                                </li>
                            </ul>
                        </div>

                    } 



                </div>
            </Link>
        </li>
    );
};




export default Product;