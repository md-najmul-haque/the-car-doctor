import React, { useEffect, useState } from 'react';
import DietProduct from '../DietProduct/DietProduct';
import './DietProducts.css'

const DietProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(products => setProducts(products));
    }, [])

    return (
        <div id='services' className='container mt-5'>
            <h2 className='text-center'>Our Services</h2>

            <div className='row my-5'>
                {
                    products.map(product => <DietProduct key={product._id} product={product}></DietProduct>)
                }
            </div>

        </div>
    );
};

export default DietProducts;