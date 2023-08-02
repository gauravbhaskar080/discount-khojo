import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    id: String, 
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'products');

const products = mongoose.model('products', productSchema);

export default products; 