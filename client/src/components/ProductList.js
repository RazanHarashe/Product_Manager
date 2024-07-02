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

    const deleteProduct = id => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => setProducts(products.filter(product => product._id !== id)))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {products.map(product => (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
