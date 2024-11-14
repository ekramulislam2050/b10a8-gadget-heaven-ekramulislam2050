import { Link } from "react-router-dom";


const Accessory = ({ data }) => {
    // console.log(data)
    const { product_image, product_title, price,product_id } = data
    return (
        <div>
            <div className="p-5 mx-auto my-5 border shadow-xl card bg-base-100 w-96"  >
                <figure className="h-[250px]">
                    <img
                        src={product_image}
                        alt="Shoes" className="w-full h-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price:{price}</p>
                    <div className="justify-start card-actions">
                        <Link to={`/Accessory/${product_id}`}>
                            <button className="bg-white rounded-full btn btn-primary border-[#9538e2] text-[#9538e2]">View details</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessory;