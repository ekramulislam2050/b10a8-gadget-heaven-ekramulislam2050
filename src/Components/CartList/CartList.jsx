import { useContext, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

import { getRemoveDataFromCartLis } from "../../../public/LocalStorage";
import { ProductContext } from "../ProductProvider/ProductProvider";


const CartList = () => {
    const { storeAddToCardId } = useContext(ProductContext)

    const [cardData, setCardData] = useState(storeAddToCardId)
    // console.log(cardData)

    const deleteItem = (c_data) => {
        // console.log(c_data)
        // console.log(cardData)

        const remains = cardData.filter(p_Data => {

            // console.log(`checking:${ c_data.product_id}!== ${p_Data.product_id }`)
            return c_data.product_id !== p_Data.product_id
        })
        // console.log(remains)
        setCardData(remains)
        getRemoveDataFromCartLis(c_data)



    }
    return (
        <div>
            <div  className="flex-row justify-between  card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5">
                <div>
                    <h1 className="text-4xl font-semibold">cart</h1>
                </div>
                <div  >
                    <button className="mr-2 text-xl  rounded-full w-28 bg-[#9538e2] text-white py-2" > Sort</button>

                    <button className="text-xl bg-[#9538e2] rounded-full text-white   w-28 py-2" >Parches</button>
                </div>
            </div>
            <div>
                {

                    cardData.map((c_data, index) => <div className="flex-row justify-between shadow-xl card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5" key={index}>
                        <figure>
                            <img
                                src={c_data.product_image} className="w-[150px]" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{c_data.product_title}</h2>
                            <p>{c_data.description}</p>
                            <div className="justify-end card-actions">
                                <p className="card-title">${c_data.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            <TiDeleteOutline className="text-5xl text-red-500" onClick={() => deleteItem(c_data)} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CartList;