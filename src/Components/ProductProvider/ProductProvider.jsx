import { createContext, useEffect, useState } from "react";
 
 import {getDataFromWishListHandler, getFromAddToCardHandler, getFromLocalStorage, getWishListDataFromLocalStorage} from "../../../public/LocalStorage"
 
 

 
export const ProductContext = createContext( )

const ProductProvider = ({children}) => {
    const[allProduct,setAllProduct]=useState([])
    //   console.log(allProduct)
    useEffect(()=>{
      fetch(' /allData.json')
      .then(res=>res.json())
      .then(res=>setAllProduct(res))
      
    },[])

    // id Get From Add To Card Handler start here------------------->
    const [storeAddToCardData,setStoreAddToCardData]=useState([])
    // console.log(storeAddToCardId)
    const [array,setArray]=useState([])
    // console.log(array)
   
    useEffect(()=>{
        const arrLs = getFromLocalStorage()
        // console.log(arrLs)
        setStoreAddToCardData(arrLs)
        
    },[array])
  
    const idGetFromAddToCardHandler=(current_id)=>{
          const chooseProduct = allProduct.filter(product=>product.product_id == parseInt(current_id))
            const newArr = chooseProduct[0]
            setArray(newArr)
            getFromAddToCardHandler(newArr)
          
            
    }
    // id Get From Add To Card Handler end here------------------->

    // id Get From Wish List Handler start here-------------->
    const [storeWishListData,setStoreWishListData]=useState([])
    // console.log(storeWishListId)
    const [wishListArray,setWishListArray]=useState([])
    // console.log(wishListArray)

    useEffect(()=>{
       const getWishListDataFromLs=getWishListDataFromLocalStorage()
       setStoreWishListData(getWishListDataFromLs)
    },[wishListArray])

    const idGetFromWishListHandler=(current_id)=>{
            // console.log(current_id)
           const wishListProduct = allProduct.filter(data=>data.product_id == parseInt(current_id))
            // console.log(wishListProduct)
           const newArr =wishListProduct[0]
           setWishListArray(newArr)
           getDataFromWishListHandler(newArr)
    }
     // id Get From Wish List Handler end here-------------->
    const ProductInfo ={
        idGetFromAddToCardHandler,
        idGetFromWishListHandler,
        setStoreAddToCardData,
        setStoreWishListData,
        storeAddToCardData,
        storeWishListData
     }
    return (
        <ProductContext.Provider value={ProductInfo}>
               {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;