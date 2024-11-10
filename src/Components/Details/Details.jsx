import { useEffect, useState } from "react";
import {   useParams } from "react-router-dom";
 

 

const Details = () => {
    const {product_id} =useParams()
  
    //  const clickedProductId = parseInt(product_id)
    //  console.log(typeof(product_id ))
    const [dataOfAll,setDataOfAll]=useState([])
    // console.log(dataOfAll)
       useEffect(()=>{
           fetch("/AllData/allData.json")
           .then(res=>res.json())
           .then(res=>setDataOfAll(res))
       },[])
 
      const clickedData = dataOfAll.find(ProductData=> ProductData.product_id ===  product_id )
      console.log(clickedData)
    return (
        <div>
            <h1>details Components</h1>
        </div>
    );
};

export default Details;