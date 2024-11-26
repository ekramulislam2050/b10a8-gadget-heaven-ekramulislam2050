import { useContext, useEffect, useState } from "react";

import {useNavigate, useParams } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
 
 

const Details = () => {
     const navigate = useNavigate()
    const { product_id } = useParams()
    const clickedProductId = parseInt(product_id)
    const [dataOfAll, setDataOfAll] = useState([])

    useEffect(() => {
        fetch("/allData.json")
            .then(res => res.json())
            .then(res => setDataOfAll(res))
    }, [])

    const clickedData = dataOfAll.find(ProductData => ProductData.product_id == clickedProductId)
    // console.log(clickedData)
    const { rating, specification, price, product_image, product_title, availability, product_id: current_id

    } = clickedData || {}
    // console.log( current_id
    // )
    // addToCardHandler---------------
    const { idGetFromAddToCardHandler, idGetFromWishListHandler } = useContext(ProductContext)
    const addToCardHandler = (current_id) => {
        
        // console.log(current_id)
        idGetFromAddToCardHandler(current_id)
        toast.success("item added to cart list,please click the dashboard for seeing cart list",{autoClose:3000})
         setTimeout(()=>{
            navigate("/")
         },3000)
  
    }
    // wish list handler---------------------------
    const wishListHandler = (current_id) => {
     
        // console.log(current_id)
        idGetFromWishListHandler(current_id)
        toast.success("item added to wish list,please click the dashboard for seeing wish list",{autoClose:3000})
         setTimeout(()=>{
            navigate("/")
         },3000)
        
    }

    return (

        <div className="bg-[#9538e2] w-11/12 mx-auto relative pb-80 rounded-b-xl mb-80">
            <ToastContainer></ToastContainer>
            <div className="">
                <h1 className="pt-5 text-4xl font-bold text-center text-white"> Product Details</h1>
                <p className="pt-3 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br>the coolest accessories, we have it all!</p>


            </div>
            <div style={{ position: "absolute", top: "450px", left: "50%", transform: 'translate(-50%,-50%)' }} className="p-5 border border-white rounded-xl ">

                <div className=" lg:w-[1000px] lg:h-[600px]  sm:w-[350px] sm:h-[300px] mx-auto   hero bg-base-200">
                    <div className="flex-col px-2 hero-content lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold"> {product_title}</h1>
                            <p className="py-6 font-bold">
                                Price : $ {price}
                            </p>
                            <button className="text-black bg-green-200 rounded-full btn">{availability} </button>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, deleniti.</p>
                            <div>
                                <p className="py-2 font-bold">specification:</p>
                                <ul>

                                    <li>1.{specification}</li>
                                    <li>2.{specification}</li>
                                    <li>3.{specification}</li>
                                    <li>4.{specification}</li>
                                    <li>5.{specification}</li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-xl font-bold">Rating : {rating}</span>

                            </div>
                            <div className="mt-1 rating">
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="bg-orange-400 mask mask-star-2"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" defaultChecked />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" defaultChecked />
                                <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                            </div>
                            <div className="mt-1">

                                <button className="mr-2 text-black bg-green-200 rounded-full btn" onClick={() => addToCardHandler(current_id)}>Add to card<BsCart2 /> </button>

                                <button className="text-black bg-green-200 rounded-full btn" onClick={() => wishListHandler(current_id)}><CiHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Details;