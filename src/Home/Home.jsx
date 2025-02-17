import AdTaskPartners from "../Components/AdTaskPartners";
import AdTaskYT from "../Components/AdTaskYT";
import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import ContactUs from "../Components/ContactUs";
import Feature from "../Components/Feature";

import Navber from "../Components/Navber";
import SERVICES from "../Components/SERVICES";
import Testimonial from "../Components/Testimonial";

const Home = () => {
    return (
        <div className="bg-black min-h-screen">
           <div className=" py-5 px-10">
           <Navber/>
           <Banner/>
           <AdTaskYT/>
           <Brand/>
          <AdTaskPartners/>
          <Feature/>
          <SERVICES/>
         
       <Testimonial/>
       <ContactUs/>
           </div>
        </div>
    );
};

export default Home;