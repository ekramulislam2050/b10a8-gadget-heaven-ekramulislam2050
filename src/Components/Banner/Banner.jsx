

const Banner = () => {
    return (
        <div className="bg-[#9538e2] w-11/12 mx-auto">
            <div className="relative">
                <h1 className="pt-5 text-4xl font-bold text-center text-white">Upgrade Your Tech Accessorize With <br></br> Gadget Heaven Accessories</h1>
                <p className="pt-3 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br></br>the coolest accessories, we have it all!</p>
                <div className="py-4 text-center ">
                    <a className="text-xl bg-white rounded-full text- btn btn-ghost">Shop Now</a>
                </div>
            </div>
            <div className="absolute"> 
                <div className="lg:w-[1000px] lg:h-[600px]  sm:w-[350px] sm:h-[300px] border-white border rounded-xl mx-auto ">
                    <img src="/src/assets/image/banner.jpg" alt="" className="w-full h-full m-5 rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;