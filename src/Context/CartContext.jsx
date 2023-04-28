
import { createContext, useEffect, useState } from "react";
import {ProductsData} from "../Data/ProductsData.js"
export const CartContext = createContext();    

export const CartProvider = ({children}) =>{
     const [cartItems,setCartItems] = useState(()=>{
        try{    
            const productosEnLocal = localStorage.getItem('')
            return productosEnLocal ? JSON.parse(productosEnLocal):[]
        }catch(error){
            return [];
        }
           
          
     });

useEffect(()=> {
    localStorage.setItem('', JSON.stringify(cartItems))
  
},[cartItems]);

const addItemToCart = (product) => {
    const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
    );  

    if(inCart){
        const {Cantidad_disponible}= ProductsData.filter(item=>item.id===product.id)[0];
        setCartItems(   
            cartItems.map((productInCart) => {
                if(productInCart.id === product.id){
                    if(productInCart.Cantidad_disponible<Cantidad_disponible){
                        return {...inCart,Cantidad_disponible: inCart.Cantidad_disponible + 1      }
                    }else{
                        alert("No hay mas unidades disponibles")
                        return  productInCart;
                    }
                }else return productInCart
            } ) );
    }
    else {
        setCartItems([...cartItems,{ ...product,Cantidad_disponible:1}])
    }}

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );
        if (inCart.Cantidad_disponible === 1){
               setCartItems(
                cartItems.filter(productInCart => productInCart.id !== product.id)
               );
        }else{
            
            setCartItems(
                cartItems.map ((productInCart) => {
                if(productInCart.id === product.id){
                    return { ...inCart, Cantidad_disponible : inCart.Cantidad_disponible - 1}
                }else return productInCart; 
            }));
        }
    };
   return (   
   <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart}}>
    {children}
    </CartContext.Provider>
    
    );
   

};