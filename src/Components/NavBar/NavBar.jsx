
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
const NavBar = () => {
    return (
        <div className="navbar bg-[#9538e2] w-11/12 mx-auto rounded-t-xl mt-4">
            <div className="flex-1 ">
               <a className="text-xl text-white btn btn-ghost">Gadget Heaven</a>
               <div className="justify-center mx-auto ">
 
                        <a className="text-xl text-white btn btn-ghost">Home</a>
                        <a className="text-xl text-white btn btn-ghost">Statistics</a>
                        <a className="text-xl text-white btn btn-ghost">Dashboard</a>
               
                </div>

            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaCartShopping className="text-3xl text-white" />
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <CiHeart className="text-4xl text-white" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;