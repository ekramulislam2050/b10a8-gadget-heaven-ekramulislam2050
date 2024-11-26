import { useLoaderData } from "react-router-dom";
import Accessory from "../Accessory/Accessory";



 

const Accessories = () => {
     
    const forAccessories = useLoaderData()
    // console.log(forAccessories)
    const justForAccessories = forAccessories.filter(data=>data.category === "Accessories" ? data:'')
    // console.log(justForAccessories)
    return (
        
        <div className="grid grid-cols-4">
            
            {
                justForAccessories.map((data,index)=><Accessory data={data} key={index}></Accessory>)
            }
        </div>
    );
};

export default Accessories;