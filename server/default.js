

// import Product from './model/productSchema.js';
import { products } from './constants/product.js';
import Products from './model/productSchema.js';

const DefaultData = async () => {
    try {
        await Products.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;