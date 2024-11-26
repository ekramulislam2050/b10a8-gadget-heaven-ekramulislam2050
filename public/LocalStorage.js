

 const getFromLocalStorage=()=>{
      const get = localStorage.getItem("card_id");
      // console.log(get)
      if(get){
         const convertToJsObject = JSON.parse(get);
         return convertToJsObject
      }else{
        return []
      }
 }

const getFromAddToCardHandler =(id)=>{
        //  console.log(id)
        const getFromLs = getFromLocalStorage()
        // console.log(getFromLs)
        if(getFromLs.includes(id)){
              // console.log(id,'all ready exit')
        }else{
            getFromLs.push(id)
            const convertToJsonStr = JSON.stringify(getFromLs);
              localStorage.setItem("card_id",convertToJsonStr)
        }
      
}
      

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
export {getFromLocalStorage,getFromAddToCardHandler,getDataFromWishListHandler,getWishListDataFromLocalStorage};