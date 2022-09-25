import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props.product);
    const { handelCartToAdd, product } = props;
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h3>Price : ${price}</h3>
                <p><small>Manufacture : {seller}</small></p>
                <p><small>Rate : {ratings} 🌟 </small></p>
            </div>
            <button onClick={() => handelCartToAdd(product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;