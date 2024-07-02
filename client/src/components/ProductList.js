import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/products');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {products.map(product => (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
