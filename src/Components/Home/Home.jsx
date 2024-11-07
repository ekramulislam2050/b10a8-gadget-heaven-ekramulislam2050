import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ExploreSection from "../ExploreSection/ExploreSection";

 

const Home = () => {
    const allData=useLoaderData()
   
    return (
      
        <div>
             <div>
             <Banner></Banner>
             </div>
             <div>
                {
                    allData.map((data,index) =><ExploreSection data={data} key={index}></ExploreSection>)
                }
           
             </div>
        </div>
    );
};

export default Home;