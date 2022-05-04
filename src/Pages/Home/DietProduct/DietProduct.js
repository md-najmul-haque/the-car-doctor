import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './DietProduct.css'

const DietProduct = ({ product }) => {
    const { _id, name, img, description, price } = product
    let navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/serviceDetail/${id}`)

    }

    return (

        <div className='col-sm-12 col-md-6 col-lg-4 mb-5'>

            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p>{description}</p>
            <Button onClick={() => { navigateToServiceDetail(_id) }} className='btn btn-primary'>Book {name}</Button>
        </div>

    );
};

export default DietProduct;