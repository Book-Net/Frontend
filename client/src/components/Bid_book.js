import React from "react";

function Bid_book({onChange_s, onChange_e, onChange_b} ) {
    return (
            <div className="sm:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Starts</label>
                        <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="00.00.00" 
                        type="datetime-local"
                        required
                        onChange={onChange_s}
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Ends</label>
                        <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="00.00.00" 
                        required
                        type="datetime-local"
                        onChange={onChange_e}
                        />
                    </div>
                    
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Minimum bid</label>
                        <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="Rs.00.00" 
                        required 
                        onChange={onChange_b}
                        />
                    </div>
                </div>
            </div>
    );
}

export default Bid_book;
