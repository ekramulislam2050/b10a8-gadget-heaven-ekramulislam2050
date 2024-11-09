import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
 



const AllProduct = () => {
    const data = useLoaderData()
    //  console.log(data)
   
    return (
        <div className="grid justify-center grid-cols-4">
            {
                data.map((data, index) =><Product data={data} key={index}></Product>)
            }
                 
                 
        </div>



    );
};

export default AllProduct;