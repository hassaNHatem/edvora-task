import React from 'react'
import './styles/products.css'

import InfiniteCarousel from 'react-leaf-carousel';
import Product from './Product';

const Products = (props) => {
  return (
    <div className='products-container'style={{height:'200px' } }>
        <div className='products-header'>
            <h2>{props.product[0].product_name}</h2>
            <hr style={{width:'80%'}}></hr>
        </div>
        <div className='carusol'>
        <InfiniteCarousel 
        
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 0,
        },
      },
    ]}
    dots={false}
    showSides={false}
    sidesOpacity={0.2}
    sideSize={0.5}
    slidesToScroll={1}
    slidesToShow={4}
    scrollOnDevice={true}
    slidesSpacing={0}
    animationDuration={800}
    incrementalSides={true}
    prevArrow={<></>}
  >
  {props.product?.map(el=>{
    return <Product product={el}></Product>
  })}
  </InfiniteCarousel>
  </div>
    </div>
  )
}

export default Products