import Button from "../components/Button";
import { AiFillStar } from "react-icons/ai";
import "./component.css";

const Seller_description = () => {
    return ( 
        <>

    
     <div className="seller-card-container">
      <h2 className="column-name">Seller Description</h2>
       <div className="flex justify-center space-x-8">
          <div className="mb-4"> <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt="Seller" className="w-20 h-20 rounded-full max-w-full" /></div>
        
        <div className="flex flex-col">
          <div className="ratings flex text-yellow-500 mb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="ml-2">
            <a href= "#">view all listings of seller</a>
          </div>
          
        </div>

        <div className="flex flex-col">
            <p className="mb-1">Yasintha Samaranayake</p>
            <p className="mb-1">Matara</p>
            <p className="mb-1">Member since 03/07/2021</p>
            <Button
              className="border-radius-10px bg-[#4F6D7A] text-white my-6 font-bold px-6 shadow-lg"
              type="submit"
            >
              View profile
            </Button>
        </div>
        </div>
        </div>
       
        </>
     );
}
 
export default Seller_description;