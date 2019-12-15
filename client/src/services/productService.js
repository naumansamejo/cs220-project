import axios from 'axios';
import {products as pr, product_images as pi} from '../dummyData';


export default {
  getAll: async (category="men") => {
    // let res = await axios.get(`/api/product`);
    // return res.data || [];
    
    let products;


    products = pr.filter(p => p.category === category );

    products.map(function(p){

      p.images = pi.reduce( function(result, image){
        if(image.product_id == p.id){
          result.push(image.src);
        }
        return result;
      }, [] );

    });


    return products;
  },

  getProduct: async (id) => {
    let product;

    product = pr.filter( p => p.id == id ? true : false)[0];
    

    product.images = pi.reduce( function(result, element){

        if(element.product_id == id){
            result.push(element.src);
        }


        return result;
    }, [] );
  

    return product;
  }


}