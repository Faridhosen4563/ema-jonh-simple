import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css'
const Shops = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handelCartToAdd = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelCartToAdd={handelCartToAdd}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <h2>Order summary</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;