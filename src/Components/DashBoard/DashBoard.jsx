import { useContext } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";
import AssistantOfDashBoard from "../AssistantOfDashBoard/AssistantOfDashBoard";


const DashBoard = () => {
    const {storeAddToCardId}=useContext(ProductContext)
 
    // console.log(storeAddToCardId)
    return (
        <div>
            <div className="bg-[#9538e2] w-11/12 mx-auto  pb-32 rounded-b-xl">
                <div className="">
                    <h1 className="pt-5 text-4xl font-bold text-center text-white"> Dash Board</h1>
                    <p className="pt-3 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br>the coolest accessories, we have it all!</p>
                    <div className="py-4 text-center ">
                        <a className="mr-2 text-xl bg-white rounded-full w-28 text- btn btn-ghost"> cart</a>

                        <a className="text-xl bg-white rounded-full text- btn btn-ghost w-28">Wish list</a>
                    </div>

                </div>

            </div>
            <div>
               {
                storeAddToCardId.map((data,index)=><AssistantOfDashBoard key={index} data={data}></AssistantOfDashBoard>)
               }
            </div>
        </div>
    );
};

export default DashBoard;