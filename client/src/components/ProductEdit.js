import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                        name="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                        name="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default ProductEdit;
