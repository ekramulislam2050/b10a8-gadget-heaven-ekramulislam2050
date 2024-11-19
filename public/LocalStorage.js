

 const getFromLocalStorage=()=>{
      const get = localStorage.getItem("card_id");
      if(get){
         const convertToJsObject = JSON.parse(get);
         return convertToJsObject
      }else{
        return []
      }
 }

const getFromAddToCardHandler =(id)=>{
      
        const getFromLs = getFromLocalStorage()
        if(getFromLs.includes(id)){
              console.log(id,'all ready exit')
        }else{
            getFromLs.push(id)
            const convertToJsonStr = JSON.stringify(getFromLs);
              localStorage.setItem("card_id",convertToJsonStr)
        }
      
}
export {getFromAddToCardHandler};