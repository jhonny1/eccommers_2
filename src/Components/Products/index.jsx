import React, { useContext } from 'react';
import { ProductsData } from '../../Data/ProductsData'
import { CartContext } from '../../Context/CartContext'
import styles from'./styles.module.scss'



const Products = () => {
    const {addItemToCart}= useContext(CartContext)

    return (
        <div className={styles.productsContainer}>
           {ProductsData.map((product) => (
            <div className={styles.product}>
                <img src={product.img} alt={product.Nombre}  />
                <div >
                <p> 
                    {product.Nombre} - ${product.Precio}
                </p>
            </div>
            <button onClick={() => addItemToCart(product) }>Add to Cart</button>
            </div>
           )
           
           )}
           

           
        </div>
    )
}

export default Products
