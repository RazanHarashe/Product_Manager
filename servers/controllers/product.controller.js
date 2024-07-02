const Product = require('../model/product.model');

// Create Product
exports.createProduct=async(req,res)=>{
    try{
    const{title, price, description} = req.body;
    const product = new Product({title, price, description});
    await product.save();
    res.status(201).json(product);
    }catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};

// Get All Product
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching products', error });
    }
};

// Get Product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching product', error });
    }
};
