import React from 'react';
import styles from './styles.module.scss'
import Cart from '../Cart';
import Products from '../Products';

const Home = () => {
    return (
        <div className={styles.home}>
            <Cart/>
            <Products/> 
        </div>
    )
}

export default Home;

