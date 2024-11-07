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

            <div className="mt-[400px]  border ">
                <h2 className="ml-48 text-4xl font-bold text-center" >Explore Cutting-Edge Gadgets</h2>

                <div className="flex justify-evenly">
                    <div className="mt-[300px] ml-10">
                        <Aside></Aside>
                    </div>

                    <div className="grid grid-cols-3 w-[75%]   my-10 ">
                        {
                            allData.map((data, index) =>
                                <ExploreSection data={data} key={index}></ExploreSection>

                            )
                        }

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;