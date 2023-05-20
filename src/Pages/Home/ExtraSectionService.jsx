import { FaDollarSign, FaStar, FaTruck, FaUmbrella } from "react-icons/fa";

const ExtraSectionService = () => {
 
  const commitments =[
    {
      'icon': <FaTruck />,
      'heading': 'Super fast delivery',
      'description': 'we have a big delivery team.'
    },
    {
      'icon': <FaUmbrella/>,
      'heading': '24/7 Customer Support.',
      'description': 'For any kind of information'
    },
    {
      'icon': <FaDollarSign/>,
      'heading': 'Safe & secure payments',
      'description': 'SSL Certifiyed Payment System'
    },
    {
      'icon': <FaStar/>,
      'heading': 'Returns & Refunds Policy.',
      'description': 'We Take All Risk For You.'
    }
  ]
  return (
    <div className="my-4">
        <h2 className="text-4xl text-pink-900 font-bold text-center">Our Commitment</h2>
        <div  className="flex flex-col justify-center items-center md:flex-row">
        {
          commitments.map((commitment,index)=><div className=" md:w-1/4 md:my-5" key={index}><div className='flex items-center md:border-t-2 md:border-r-2 md:border-b-2  p-3 h-32'>
          <div className="text-5xl rounded-lg text-red-950 ">
            {commitment.icon}
          </div>
          <div className="px-3">
            <h2 className="text-lg font-bold">{commitment.heading}</h2>
            <p>{commitment.description}</p>
          </div>
        </div></div>)
        }
    </div>
    </div>
  );
};

export default ExtraSectionService;
