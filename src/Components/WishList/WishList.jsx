
import { TiDeleteOutline } from "react-icons/ti";
import { getRemoveDataFromWishList, getWishListDataFromLocalStorage } from "../../../public/LocalStorage";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";


const WishList = () => {
    const { storeWishListData,setStoreWishListData } = useContext(ProductContext)
    const [wishData, setWishData] = useState(storeWishListData)
    // console.log(wishData)
      const [clickedDataOfWish,setClickedDataOfWish]=useState([])
     useEffect(()=>{
        const ls_wishListDataAfterRemove = getWishListDataFromLocalStorage()
        setStoreWishListData(ls_wishListDataAfterRemove)
     },[clickedDataOfWish])
    const deleteItem = (w_data) => {
        // console.log(c_data)
        // console.log(wishData)

        const remains = wishData.filter(p_Data => {

            // console.log(`checking:${ c_data.product_id}!== ${p_Data.product_id }`)
            return w_data.product_id !== p_Data.product_id
        })
        // console.log(remains)
        setWishData(remains)
        getRemoveDataFromWishList(w_data)
        setClickedDataOfWish(w_data)


    }
    return (
        <div>
            <div>
                <h1>Wish list</h1>
            </div>
            <div>
                {
                    wishData.map((w_data, index) => <div className="flex-row justify-between shadow-xl card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5" key={index}>
                        <figure>
                            <img
                                src={w_data.product_image} className="w-[150px]" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{w_data.product_title}</h2>
                            <p>{w_data.description}</p>
                            <div className="justify-end card-actions">
                                <p className="card-title">${w_data.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            <TiDeleteOutline className="text-5xl text-red-500" onClick={() => deleteItem(w_data)} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WishList;