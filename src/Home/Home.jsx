import AdTaskYT from "../Components/AdTaskYT";
import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import ContactUs from "../Components/ContactUs";

import Navber from "../Components/Navber";

const Home = () => {
    return (
        <div className="bg-black min-h-screen">
           <div className=" py-5 px-10">
           <Navber/>
           <Banner/>
           <AdTaskYT/>
           <Brand/>
         <ContactUs/>
           </div>
        </div>
    );
};

export default Home;