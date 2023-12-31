import React from "react";

function AddFor_Sell() {
    return (
        <div>
                <div class="py-4 px-4 mx-auto max-w-2xl">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <div class="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Price</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Rs.00.00" required="" />
                            </div>
                            <div class="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Pick Up Point</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your Location" required="" />
                            </div>
                        </div>
                </div>
        </div>
    );
}

export default AddFor_Sell;
