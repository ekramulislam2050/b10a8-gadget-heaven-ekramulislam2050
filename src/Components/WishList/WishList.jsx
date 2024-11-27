import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { ProductContext } from "../ProductProvider/ProductProvider";

const WishList = ({ data }) => {
    const {storeWishListId}=useContext(ProductContext)
    //  console.log(storeWishListId)
    const { product_title, product_image, description, price } = data
    return (
        <div className="flex-row justify-between shadow-xl card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5">
            <figure>
                <img
                    src={product_image} className="w-[150px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <div className="justify-end card-actions">
                    <p className="card-title">${price}</p>
                </div>
            </div>
            <div className="flex items-center ">
                <TiDeleteOutline className="text-5xl text-red-500" />
            </div>
        </div>
    );
};

export default WishList;