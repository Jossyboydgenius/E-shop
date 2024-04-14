import React from 'react'
import './ListProduct.css'

const ListProduct = () => {
  return (
    <div className='list-product'>
      <div className="listproduct-itemfield">
                <p>Product title</p>
                <input type="text" name='name' placeholder='Type here' />
            </div>
            <div className="listproduct-price">
                <div className="listproduct-itemfield">
                    <p>Price</p>
                    <input type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className="listproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="listproduct-itemfield">
                <p>Product Category</p>
                <select name="category" className='list-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>

    </div>
  )
}

export default ListProduct
