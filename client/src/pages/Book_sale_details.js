import Book_categories from "../components/Book_categories";
import book from "../assets/book1.png";
import Searchbar from "../components/Searchbar";
import Book_sale_description from "../components/Book_sale_description";
import Seller_description from "../components/Seller_description";
import BuyNowCard from "../components/BuyNowCard";
import Book_name_author from "../components/Book_name_author";
import Button from "../components/Button";
import { AiOutlineHeart } from "react-icons/ai";

const Book_sale_details = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-3/4 mx-auto">
        <Searchbar />
      </div>
      <div className="w-3/4 mx-auto">
        <Book_categories />
      </div>
      <div className="bg-white p-20 rounded-lg shadow-md w-full md:max-w-screen-lg">
        <div className="flex">
          <div className="w-1/3">
            <img src={book} className="w-3/5 rounded-md" alt="" />
          </div>
          <div className="ml-0 mt-2 mr-4">
            <AiOutlineHeart className="text-red-400 w-7 h-7" />
          </div>
          <div className="w-2/3 px-4">
            <div className="pb-2">
              <Book_name_author />
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md shadow-#9B9B9B w-1/2 ml-0">
              <BuyNowCard />
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-100 p-20 rounded-lg shadow-md w-full md:max-w-screen-lg flex justify-end">
          <Book_sale_description />
        </div>

        {/* <Button
          className="mt-4 bg-gray-100 border border-red-500 hover:bg-gray-300 text-red-700 py-2 px-4 rounded shadow-md"
          type="submit"
        >
          Ask a question
        </Button> */}

        <div className="mt-8 bg-gray-100 p-5 rounded-lg shadow-md w-full md:max-w-screen-lg">
          <Seller_description />
        </div>
      </div>
    </div>
  );
};

export default Book_sale_details;