import React from 'react'
import './styles/product.css'
const Product = (props) => {
    return (
        <div className='product'>
            <div className='header'>
                <div className='img'>
                   <img src={props.product.image}></img>
                </div>
                <div className='header-details'>
                    <h3>{props.product.product_name}</h3>
                    <p>{props.product.brand_name}</p>
                    <h5>${props.product.price}</h5>
                </div>
            </div>
            <div className='details'>
                <div><p>{props.product.state}</p></div>
                <div><p>{props.product.time}</p> </div>
            </div>
            <p className='disc'>{props.product.discreption}</p>
        </div>
    )
}

export default Product