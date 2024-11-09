 
import { useLoaderData } from "react-router-dom";
import Laptop from "../Laptop/Laptop";
 

 

const Laptops = () => {
    const forLaptops = useLoaderData()
    
     const justLaptops = forLaptops.filter(data=>data.category === "Laptop" ? data:'')
   
    return (
        <div className="grid grid-cols-4">
              
           {
             justLaptops.map((data,index)=><Laptop data={data} key={index}></Laptop>)
           }
          
             
           
        </div>
    );
};

export default Laptops;