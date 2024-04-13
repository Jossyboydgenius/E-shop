import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sider-item">
                    <img src={add_product_icon} alt="" />
                    <p>Add Prodcut</p>
                </div>
            </Link>
        </div>
    )
}

export default SideBar
