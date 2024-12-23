import { useState } from "react";

import CartList from "../CartList/CartList";
import WishList from "../WishList/WishList";



const DashBoard = () => {

    const [show, setShow] = useState()
    return (
        <div>
            <div className="bg-[#9538e2] w-11/12 mx-auto  pb-32 rounded-b-xl">
                <div className="">
                    <h1 className="pt-5 text-4xl font-bold text-center text-white"> Dash Board</h1>
                    <p className="pt-3 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br>the coolest accessories, we have it all!</p>
                    <div className="py-4 text-center ">
                        <button className="mr-2 text-xl border-white rounded-full w-28 btn btn-ghost" style={{ background: show === "cart" && "white" }} onClick={() => setShow("cart")}> cart</button>

                        <button className="text-xl border-white rounded-full btn btn-ghost w-28" style={{ background: show === "wish list" && "white" }} onClick={() => setShow("wish list")}>Wish list</button>
                    </div>

                </div>

            </div>
            <div>
                {show === "cart" && <CartList></CartList>}
                {show === "wish list" && <WishList></WishList>}
            </div>
        </div>
    );
};

export default DashBoard;