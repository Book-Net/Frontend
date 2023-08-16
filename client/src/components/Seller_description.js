import Button from "../components/Button";
import { AiFillStar } from "react-icons/ai";
import "./component.css";

const Seller_description = () => {
  return (
    <>
      <div className=" p-2 flex flex-col gap-4 m-2">
        <h2 className="text-[#BF5A36] text-xl font-bold mb-10">
          Seller Description
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="mb-4 justify-baseline">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
              alt="Seller"
              className="w-32 h-32 rounded-full max-w-full border border-gray-300"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="ratings flex text-yellow-500 mb-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="ml-2">
              <a href="#">view all listings of seller</a>
            </div>
          </div>

          <div className="flex flex-col self-end justify-baseline text-left">
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
};

export default Seller_description;