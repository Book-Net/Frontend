import React from "react";

function ViewHistory() {
  return (
    <>
      
        <div className="mb-4">
          <h2 className="text-xl font-bold">Bidding History</h2>
        </div>
        
        <div className="overflow-auto max-h-60 mx-10">
         <table className="border-none min-w-full">
         <thead>
            <tr>
              <th className="text-left">Bidder</th>
              <th className="text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
                <td>Y. G.Samaranayake</td>
                <td>RS. 500</td>
            </tr>
            <tr>
                <td>Y. G.Samaranayake</td>
                <td>RS. 450</td>
            </tr>
            <tr>
                <td>Y. G.Samaranayake</td>
                <td>RS. 440</td>
            </tr>
            <tr>
                <td>Y. G.Samaranayake</td>
                <td>RS. 430</td>
            </tr>
            <tr>
                <td>Y. G.Samaranayake</td>
                <td>RS. 420</td>
            </tr>
            <tr>
                <td>Y. G.Samaranayake</td>
                <td>RS. 410</td>
            </tr>
           </tbody>
         </table>
       </div>
        
    </>
  );
}

export default ViewHistory;