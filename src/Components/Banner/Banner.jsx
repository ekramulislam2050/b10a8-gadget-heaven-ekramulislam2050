

const Banner = () => {
    return (
        <div className="bg-[#9538e2] w-11/12 mx-auto relative pb-80 rounded-b-xl">
            <div className="">
                <h1 className="pt-5 text-4xl font-bold text-center text-white">Upgrade Your Tech Accessorize With <br></br> Gadget Heaven Accessories</h1>
                <p className="pt-3 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br>the coolest accessories, we have it all!</p>
                <div className="py-4 text-center ">
                    <a className="text-xl bg-white rounded-full text- btn btn-ghost">Shop Now</a>
                </div>
                
            </div>
            <div style={{position:"absolute",top:"600px" ,left:"50%",transform:'translate(-50%,-50%)'}}  className="border border-white rounded-xl "> 
                <div className="lg:w-[1000px] lg:h-[600px]  sm:w-[350px] sm:h-[300px] mx-auto   p-5  " >
                    <img src="/src/assets/image/banner.jpg" alt="" className="w-full h-full rounded-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;