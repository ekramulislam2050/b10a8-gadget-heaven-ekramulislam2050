

const ExploreSection = ({ data }) => {
   const { product_title, product_image, price } = data
   return (
      <div className="p-5 my-5 border shadow-xl r card bg-base-100 w-96">
         <figure>
            <img
               src={product_image}
               alt="Shoes"  className="w-full h-80"/>
         </figure>
         <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p>Price:{price}</p>
            <div className="justify-start card-actions">
               <button className="bg-white rounded-full btn btn-primary border-[#9538e2] text-[#9538e2]">View details</button>
            </div>
         </div>
      </div>
   );
};

export default ExploreSection;