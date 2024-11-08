 
import { useLoaderData } from "react-router-dom";
 

 

const Laptops = () => {
    const forLaptops = useLoaderData()
    
     const justLaptops = forLaptops.filter(data=>data.category === "Laptop" ? data:'')
   
    return (
        <div>
              
           {
            
           }
          
             
           
        </div>
    );
};

export default Laptops;