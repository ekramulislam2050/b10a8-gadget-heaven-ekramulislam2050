import { NavLink } from "react-router-dom";


const Aside = () => {
    return (
        <div className="w-64 p-8 text-center border shadow-xl card bg-base-100">
            <NavLink to={"AllProduct"}>
                <div className="w-30" >
                    <button className="rounded-full bg-[#9538e2] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white w-full">All Products</button>
                </div>
            </NavLink>
            <br></br>
            <NavLink to={"Laptops"}>
                <div className="w-30" >
                    <button className="rounded-full bg-[#9538e2] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white w-full ">Laptops</button>
                </div>
            </NavLink>

            <br></br>
            <div className="w-30">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#9538e2] rounded-full text-white w-full">Phones</button>
            </div>
            <br></br>
            <div className="w-30">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#9538e2] rounded-full text-white w-full">Accessories</button>
            </div>
            <br></br>
            <div className="w-30">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#9538e2] rounded-full text-white w-full">Smart Watch</button>
            </div>


        </div>
    );
};

export default Aside;