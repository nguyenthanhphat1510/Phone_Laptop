import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
    categoryId: {type: String, required: true},
    sub_categoryId: {type: String, required: true},
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;