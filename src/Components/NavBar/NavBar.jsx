
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../ProductProvider/ProductProvider";
const NavBar = () => {
    const { storeAddToCardData, storeWishListData } = useContext(ProductContext)
    //    console.log(storeAddToCardId,storeWishListId)

    return (
        <div className="navbar bg-[#9538e2] w-11/12 mx-auto rounded-t-xl   mt-4">
            <div className="flex-1 ">
                <a className="text-xl text-white btn btn-ghost">Gadget Heaven</a>
                <div className="justify-center mx-auto ">

                    <NavLink to={"/"} className="text-xl text-white btn btn-ghost">
                        Home
                    </NavLink>

                    <NavLink to={"Statics"} className="text-xl text-white btn btn-ghost">Statistics
                        
                    </NavLink>
                    
                    <NavLink to={"DashBoard"} className="text-xl text-white btn btn-ghost">
                        Dashboard
                    </NavLink>


                </div>

            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaCartShopping className="text-3xl text-white" />
                            <span className="text-red-500 badge badge-sm indicator-item">{storeAddToCardData.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{storeAddToCardData.length} Items added</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <Link to={"/DashBoard"}>
                                    <button className="btn bg-[#9538e2] btn-block  btn-primary">DashBoard</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <span className="text-red-500 badge badge-sm indicator-item">{storeWishListData.length}</span>

                            <CiHeart className="pb-2 text-4xl text-white" />

                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  ">
                        <li>
                            <span className="text-lg font-bold">{storeWishListData.length} Items added</span>
                        </li>

                        <li>
                            <Link to={"/DashBoard"}>
                                <button className="btn bg-[#9538e2] btn-block  btn-primary  ">DashBoard</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;