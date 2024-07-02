import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager</h1>
        <ProductForm />
        <ProductList />
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/edit" element={<ProductEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
