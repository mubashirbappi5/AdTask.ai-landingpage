import Marquee from "react-fast-marquee";

import img1 from '../assets/Amazon.png';
import img2 from '../assets/Cocacola.png'
import img3 from '../assets/Google.png'
import img4 from '../assets/intel.png'
import img5 from '../assets/Salesforce.png'
import img6 from '../assets/Sony.png'
import img7 from '../assets/Workday.png'
const Brand = () => {
    return (
        <div className=" my-20">

<Marquee speed={100}>
    <img className="mx-7" src={img1} alt="" />
    <img className="mx-7" src={img2} alt="" />
    <img className="mx-7" src={img3} alt="" />
    <img className="mx-7" src={img4} alt="" />
    <img className="mx-7" src={img5} alt="" />
    <img className="mx-7" src={img6} alt="" />
    <img className="mx-7" src={img7} alt="" />
   
  </Marquee>
        </div>
    );
};

export default Brand;