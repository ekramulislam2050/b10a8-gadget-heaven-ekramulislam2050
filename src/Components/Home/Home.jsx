import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ExploreSection from "../ExploreSection/ExploreSection";
import Aside from "../Aside/Aside";



const Home = () => {
    const allData = useLoaderData()

    return (

        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-[400px]   ">
                <h2 className="text-4xl font-bold text-center" >Explore Cutting-Edge Gadgets</h2>
                 <div className="grid grid-cols-3 w-[75%] mx-96 my-10">
                 {
                    allData.map((data, index) =>   
                        <ExploreSection data={data} key={index}></ExploreSection>
                  
                    )
                }
                 </div>
                 <div>
                      <Aside></Aside>
                 </div>

            </div>
        </div>
    );
};

export default Home;