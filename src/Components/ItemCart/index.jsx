import React, { useContext } from 'react';
import {CartContext}  from "../../Context/CartContext";
import styles from "./styles.module.scss";

const ItemCart = ({item}) => {
    const {deleteItemToCart,addItemToCart} = useContext(CartContext)
     
    return (
        <div className={styles.cartItem}>
            <img src={item.img} alt={item.Nombre} />
            <div className={styles.dataContainer}>
                <div className={styles.left}>
                    <p>{item.Nombre}</p>
                    <div className={styles.buttons}>    
                        <button onClick={() => addItemToCart(item)}>
                            Add
                        </button>
                        <button onClick={() => deleteItemToCart(item)}>
                            remove
                        </button>  
                         
                    </div>  
                </div>
                <div className={styles.right}>
                    <div>
                        {item.Cantidad_disponible}
                        <p>Total: ${item.Cantidad_disponible * item.Precio}</p>
                    </div>
                </div>
          </div>    
        </div>
    )
};

export default ItemCart;

