import React, { useState } from 'react'
import './ProductBox.css'
import ProductCard from './../ProductCard/ProductCard'
// import data from "./../../js/data.json"


export default function ProductBox(props) {
    const {list} = props

  return (
    <div className = 'pr-box'>
        {
            list.map(product=>{
                return <ProductCard key = {product.name} name = {product.name} price = {product.price}></ProductCard>
            })
        }
      {/* <ProductCard name = {"product-name"} price = {"898989"}></ProductCard> */}
      
    </div>
  )
}
