import { useContext, useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { ProductContext } from "../ProductProvider/ProductProvider";

const CartList = ({ data }) => {
    // console.log(data)
    const { storeAddToCardId } = useContext(ProductContext)
    //   console.log(storeAddToCardId)
    // const { product_title, product_image, description, price } = data
    const [cardData, setCardData] = useState([data])
    // console.log(cardData)

    const deleteItem = (c_data) => {
        // console.log(data)
        const remain = cardData.filter(p_Data => p_Data.product_id !== c_data.product_id)
        // console.log(remain)
        setCardData(remain)
    }
    return (
        <div>
            {
                cardData.map((c_data,index) => <div className="flex-row justify-between shadow-xl card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5" key={index}>
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
    );
};

export default CartList;