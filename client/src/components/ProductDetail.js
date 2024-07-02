import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:8000/api/products/${id}`);
            setProduct(response.data);
        };

        fetchProduct();
    }, [id]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={deleteProduct}>Delete</button>
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
        </div>
    );
};

export default ProductDetail;
