import { TiDeleteOutline } from "react-icons/ti";

const AssistantOfDashBoard = ({ data }) => {
    // console.log(data)
    const { product_title, product_image, description, price } = data
    // console.log(price)
    return (
        <div className="flex-row justify-between shadow-xl card card-compact bg-base-100 w-[80%] mx-auto py-5 px-5 my-5">
            <figure>
                <img
                    src= {product_image} className="w-[150px]"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <div className="justify-end card-actions">
                   <p className="card-title">${price}</p>
                </div>
            </div>
            <div className="flex items-center ">
            <TiDeleteOutline className="text-5xl text-red-500"/>
            </div>
        </div>
    );
};

export default AssistantOfDashBoard;