import { FaDollarSign, FaStar, FaTruck, FaUmbrella } from "react-icons/fa";

const ExtraSectionService = () => {
  return (
    <div className="my-4">
        <h2 className="text-4xl text-pink-900 font-bold text-center">Our Commitment</h2>
        <div  className="flex flex-col justify-center items-center md:flex-row">
      <div className="flex mx-4 border-2 p-3">
        <div className="text-5xl rounded-lg text-red-950 ">
          <FaTruck />
        </div>
        <div className="px-3">
          <h2 className="text-xs font-bold">Super fast delivery</h2>
          <p>we have a big delivery team.</p>
        </div>
      </div>
      <div className="flex mx-4 border-2 p-3">
        <div className="text-5xl rounded-lg text-red-950">
          <FaUmbrella />
        </div>
        <div className="px-3">
          <h2 className="text-lg font-bold">24/7 Hours Customer Support.</h2>
          <p>For any kind of information about our product.</p>
        </div>
      </div>
      <div className="flex mx-4 border-2 p-3">
        <div className="text-5xl rounded-lg text-red-950">
          <FaDollarSign/>
        </div>
        <div className="px-3">
          <h2 className="text-lg font-bold">Safe & secure payments</h2>
          <p>SSL Certifiyed Payment System</p>
        </div>
      </div>
      <div className="flex mx-4 border-2 p-3">
        <div className="text-5xl rounded-lg text-red-950">
          <FaStar/>
        </div>
        <div className="px-3">
          <h2 className="text-lg font-bold">Returns & Refunds Policy.</h2>
          <p>We Take All Risk For You.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExtraSectionService;
