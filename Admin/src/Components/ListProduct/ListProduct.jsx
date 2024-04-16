import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cart_cross_icon.png';

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        try {
            await fetch('http://localhost:4000/removeproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });
            // Reload product list after removing
            await fetchInfo();
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    return (
        <div className='list-product'>
            <h1>All Product Lists</h1>
            <div className="listproduct-format-main">
                <div>Products</div>
                <div>Title</div>
                <div>Old Price</div>
                <div>New Price</div>
                <div>Category</div>
                <div>Remove</div>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="listproduct-allproducts">
                    {allproducts.map((product) => (
                        <div key={product.id} className="listproduct-format-main listproduct-format">
                            <img src={product.image} alt="" className="listproduct-product-icon" />
                            <div>{product.name}</div>
                            <div>${product.old_price}</div>
                            <div>${product.new_price}</div>
                            <div>{product.category}</div>
                            <img onClick={() => removeProduct(product.id)} className='listproduct-remove-icon' src={cross_icon} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListProduct;
