import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";

 

const Phones = () => {
    const forPhones= useLoaderData()
    // console.log(forPhones)
    const justForPhone= forPhones.filter((data)=>data.category === "Phone"?data:'')
            //  console.log(justForPhone)
    return (
        <div className="grid grid-cols-4">
             {
                justForPhone.map((data,index)=><Phone data={data} key={index}></Phone>)
             }
        </div>
    );
};

export default Phones;