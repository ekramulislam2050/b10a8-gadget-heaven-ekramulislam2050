import { useContext, useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

import { getFromLocalStorage, getRemoveDataFromCartLis } from "../../../public/LocalStorage";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { data } from "autoprefixer";


const CartList = () => {
    const { storeAddToCardData, setStoreAddToCardData } = useContext(ProductContext)

    const [cardData, setCardData] = useState(storeAddToCardData)
    // console.log(cardData)
    // total cost --------------------------------------->
    const [totalCost, setTotalCost] = useState(
         storeAddToCardData.reduce((totalPrice,product)=>{
             return  totalPrice + product.price
         },0)
    )
    // console.log(parseInt(totalCost))
    // sorting------------------------------>
       const handleSort=()=>{
          const sortData = cardData.sort((a,b)=>a.price-b.price)
              setCardData([...sortData])
            //   console.log(sortData)
       }
    
    const [clickedData, setClickedData] = useState([])
    // console.log(clickedData) 
    useEffect(() => {
        const ls_dataAfterRemove = getFromLocalStorage()
        // console.log(ls_dataAfterRemove)
        setStoreAddToCardData(ls_dataAfterRemove)

    }, [clickedData])
    const deleteItem = (c_data,price) => {
        // console.log(c_data)
        // console.log(cardData)
        //  console.log(price)
        const remains = cardData.filter(p_Data => {

            // console.log(`checking:${ c_data.product_id}!== ${p_Data.product_id }`)
            return c_data.product_id !== p_Data.product_id
        })
        // console.log(remains)
        setCardData(remains)
        getRemoveDataFromCartLis(c_data)

        setClickedData(c_data)
        setTotalCost(totalCost-price)


    }
    return (
        <div>
            <div className="flex-row justify-between  card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5">
                <div>
                    <h1 className="text-4xl font-semibold">cart</h1>
                </div>
                <div  >
                    <span className="mr-1 text-2xl font-semibold">Total price :$ {parseInt(totalCost)}</span>
                    <button className="mr-2 text-xl  rounded-full w-28 bg-[#9538e2] text-white py-2" onClick={handleSort}> Sort</button>

                    <button className="text-xl bg-[#9538e2] rounded-full text-white   w-28 py-2" >Parches</button>
                </div>
            </div>
            <div>
                { cardData.map((c_data, index) => <div className="flex-row justify-between shadow-xl card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5" key={index}>
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
                            <TiDeleteOutline className="text-5xl text-red-500" onClick={() => deleteItem(c_data,c_data.price)} />
                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default CartList;