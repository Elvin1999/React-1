import React, { Component } from 'react'
import ProductItem from './ProductItem'
import {Alert} from "reactstrap"

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2 >Product List</h2>
        <Alert color="primary">
  Hey! Pay attention.
</Alert>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    )
  }
}
