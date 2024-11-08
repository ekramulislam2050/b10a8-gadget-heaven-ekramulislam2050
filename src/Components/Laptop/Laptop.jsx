 

const Laptop = () => {
    return (
        <div>
               
               <div className="p-5 mx-auto my-5 border shadow-xl card bg-base-100 w-96" key={index}>
                <figure className="h-[250px]">
                    <img
                        src={data.product_image}
                        alt="Shoes" className="w-full h-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.product_title}</h2>
                    <p>Price:{data.price}</p>
                    <div className="justify-start card-actions">
                        <button className="bg-white rounded-full btn btn-primary border-[#9538e2] text-[#9538e2]">View details</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Laptop;