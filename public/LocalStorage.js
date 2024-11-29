

 const getFromLocalStorage=()=>{
      const get = localStorage.getItem("cardData");
      // console.log(get)
      if(get){
         const convertToJsObject = JSON.parse(get);
         return convertToJsObject
      }else{
        return []
      }
 }

const getFromAddToCardHandler =(data)=>{
      //    console.log(data)
        
        const getFromLs = getFromLocalStorage()
        // console.log(getFromLs)
        if(getFromLs.includes(data)){
              console.log(data,'all ready exit')
        }else{
            getFromLs.push(data)
            const convertToJsonStr = JSON.stringify(getFromLs);
              localStorage.setItem("cardData",convertToJsonStr)
        }
      
}
  const getRemoveDataFromCartLis=(c_data)=>{
      // console.log(c_data)
         const gFLs = getFromLocalStorage();
           console.log(gFLs)
    
           const  returnData = gFLs.filter(data=>{
            //    console.log(`checking:${  data.product_id } !== ${  c_data.product_id }`)
            return data.product_id !== c_data.product_id 
         })
          localStorage.setItem("cardData",JSON.stringify(returnData))

     }    
// wish List ------------------------------------------>
       const getWishListDataFromLocalStorage = ()=>{
              const getDataFromLocalStorage= localStorage.getItem("wishListData")
              if(getDataFromLocalStorage){
                   return JSON.parse(getDataFromLocalStorage)
              }else{
                return []
              }
       }
      const getDataFromWishListHandler=(data)=>{
               const wishListData = getWishListDataFromLocalStorage()
               if(wishListData.includes(data)){
                  console.log(data,"data is already exit")
               }else{ 
                     wishListData.push(data)
                     const convertToJsonStrWd = JSON.stringify(wishListData)
                     localStorage.setItem("wishListData",convertToJsonStrWd)

               }
      }
      

      const getRemoveDataFromWishList = (w_data)=>{
            //    console.log(w_data)
         const gFwLs = getWishListDataFromLocalStorage();
      //    console.log(gFwLs)
  
         const  returnData = gFwLs.filter(data=>{
             console.log(`checking:${  data.product_id } !== ${  w_data.product_id }`)
          return data.product_id !== w_data.product_id 
       })
       console.log(returnData)
        localStorage.setItem("wishListData",JSON.stringify(returnData))
      }
export {getFromLocalStorage,getFromAddToCardHandler,getDataFromWishListHandler,getWishListDataFromLocalStorage,getRemoveDataFromCartLis,getRemoveDataFromWishList};