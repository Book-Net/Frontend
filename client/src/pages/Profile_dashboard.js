import Profile_dash_sales_card from "../components/Profile_dash_sales_card";
import Profile_dash_bid_card from "../components/Profile_dash_bid_card";
import Profile_dash_swaps_card from "../components/Profile_dash_swaps_card";
import Profile_dash_donate_card from "../components/Profile_dash_donate_card";
import Button from "../components/Button";

const Profile_dashboard = () => {
    return (           
        <>
        <div className='border-2 border-[#F1E6D9] p-0'>

          <div className="flex justify-around ">
            <div className="flex mr-2 justify-center">
              <Profile_dash_sales_card />
            </div>
            <div className="flex mr-2 justify-center">
              <Profile_dash_bid_card />
            </div>
            <div className="flex mr-2 justify-center">
              <Profile_dash_swaps_card />
            </div>
            <div className="flex justify-center">
              <Profile_dash_donate_card />
            </div>
          </div>

          <div className='pt-2'>
            <Button
            className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
            type="submit"
            >
            Add Book
            </Button>
          </div>
        </div>
        </>
     );
}
 
export default Profile_dashboard;