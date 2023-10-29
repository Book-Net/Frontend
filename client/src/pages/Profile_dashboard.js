import Profile_dash_sales_card from "../components/Profile_dash_sales_card";
import Profile_dash_bid_card from "../components/Profile_dash_bid_card";
import Profile_dash_swaps_card from "../components/Profile_dash_swaps_card";
import Profile_dash_donate_card from "../components/Profile_dash_donate_card";

const Profile_purchase_history = () => {
    return (           
        <>
            <div className="flex flex-col justify-center">
              <Profile_dash_sales_card />
            </div>
            <div className="flex flex-col justify-center">
              <Profile_dash_bid_card />
            </div>
            <div className="flex flex-col justify-center">
              <Profile_dash_swaps_card />
            </div>
            <div className="flex flex-col justify-center">
              <Profile_dash_donate_card />
            </div>
        </>
     );
}
 
export default Profile_purchase_history;