import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Details = () => {
    const { product_id } = useParams()

    // const clickedProductId = parseInt(product_id)
    //  console.log(typeof(product_id ))
    const [dataOfAll, setDataOfAll] = useState([])
    // console.log(dataOfAll)
    useEffect(() => {
        fetch("/allData.json")
            .then(res => res.json())
            .then(res => setDataOfAll(res))
    }, [])

    const clickedData = dataOfAll.find(ProductData => ProductData.product_id === product_id)
    // console.log(clickedData)
    // const {rating,specification,price,product_image,product_title,availability}=clickedData
    console.log(clickedData.clickedData.raring)
    return (
        <div></div>
        // <div className="bg-[#9538e2] w-11/12 mx-auto relative pb-80 rounded-b-xl mb-80">
        //     <div className="">
        //         <h1 className="pt-5 text-4xl font-bold text-center text-white"> Product Details</h1>
        //         <p className="pt-3 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br>the coolest accessories, we have it all!</p>


        //     </div>
        //     <div style={{ position: "absolute", top: "450px", left: "50%", transform: 'translate(-50%,-50%)' }} className="p-5 border border-white rounded-xl ">
            
        //             <div className=" lg:w-[1000px] lg:h-[600px]  sm:w-[350px] sm:h-[300px] mx-auto   hero bg-base-200">
        //                 <div className="flex-col hero-content lg:flex-row">
        //                     <img
        //                         src={product_image}
        //                         className="max-w-sm rounded-lg shadow-2xl" />
        //                     <div>
        //                         <h1 className="text-2xl font-bold"> {product_title}</h1>
        //                         <p className="py-6">
        //                             Price : $ {price}
        //                         </p>
        //                         <button className="bg-green-300 border rounded btn btn-primary">{ availability} </button>
        //                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, deleniti.</p>
        //                         <div>
        //                             <p className="font-bold">specification:</p>
        //                             <ol>
                                    
        //                                 <li>{specification}</li>
        //                                 <li>{specification}</li>
        //                                 <li>{specification}</li>
        //                                 <li>{specification}</li>
        //                                 <li>{specification}</li>
        //                             </ol>
        //                         </div>
        //                          <div>
        //                             <span>Ratin : {rating}</span>
        //                          </div>
        //                     </div>
        //                 </div>
        //             </div>
                
        //     </div>

        // </div>
    );
};

export default Details;