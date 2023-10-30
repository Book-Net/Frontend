import React from "react";

function AddFor_Bid() {
    return (
        <div>
            <div className="sm:col-span-2">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    
                    <div class="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Minimum bid</label>
                        <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Rs.00.00" required="" />
                    </div>
                    <div class="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Duration</label>
                        <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="00.00.00" required="" />
                    </div>
                    
                    
                    
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-[#BF5A36] text-left">Pick Up Point</label>
                        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#BF5A36] border-opacity-30 focus:ring-primary-500 focus:border-primary-500" placeholder="Your Location"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFor_Bid;
