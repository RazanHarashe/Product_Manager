const Product = require('../model/product.model');

exports.createProduct=async(req,res)=>{
    try{
    const{title, price, description} = req.body;
    const product = new Product({title, price, description});
    await product.save();
    res.status(201).json(product);
    }catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
}