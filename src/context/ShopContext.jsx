import { createContext, useEffect, useState } from "react";
import { productsArray } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';

    const delivery_fee = 10;

    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);

    const [cartItems,setCartItems] = useState({});

    const addToCart = async (id,size) => {

        let cartItemsCopy = structuredClone(cartItems);

        if(!size){

            toast.error("Select size");
            return;
        }

        if(cartItemsCopy[id]){

            if(cartItemsCopy[id][size]){

                cartItemsCopy[id][size] += 1;
            }

            else{

                cartItemsCopy[id][size] = 1;
            }
        }

        else{

            cartItemsCopy[id]={};
            cartItemsCopy[id][size] = 1
        }

        setCartItems(cartItemsCopy);


    }

    console.log(cartItems);


    

    const getCartCount = () => {

        let totalCount = 0;

        for(const i in cartItems){

            for(const j in cartItems[i]){

                try {

                    if(cartItems[i][j] > 0){

                        totalCount += cartItems[i][j]
                    }
                    
                } catch (error) {
                    
                }
            }
        }

        return totalCount;
    }


    const addQuantity = async (id,size,quantity) => {

        let cartItemsCopy = structuredClone(cartItems);
      
        cartItemsCopy[id][size] = quantity+1;
      
        setCartItems(cartItemsCopy)
        
      
      }

      
      
    const removeQuantity = async (id,size,quantity) => {

        let cartItemsCopy = structuredClone(cartItems);
      
        cartItemsCopy[id][size] = quantity-1;
      
        setCartItems(cartItemsCopy)
        
      
      }

      const getCartTotal =  () => {

        let cartTotal = 0;

        for(const i in cartItems){

            let productInfo = productsArray.find((p) => p._id == i);

            for(const j in cartItems[i]){

                try {

                    if(cartItems[i][j] > 0){

                        cartTotal += productInfo.price * cartItems[i][j]
                    }
                    
                } catch (error) {
                    
                }
            }

            
        }

            return cartTotal
      }


    const value = {

        productsArray,
        currency,
        delivery_fee,
        search,setSearch,
        showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,
        addQuantity,removeQuantity,
        getCartTotal
        
    }

    return (

        <ShopContext.Provider value={value}>

            {props.children}


        </ShopContext.Provider>
    )
}

export default ShopContextProvider