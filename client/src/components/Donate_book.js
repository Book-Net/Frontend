import React from "react";

function Donate_book() {
    return (
            <div className="sm:col-span-2">
                <div class="w-full">
                    <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Pick Up Point</label>
                    <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="Your Location" 
                    required
                    id="location"/>
                </div>
                        
            </div>
    );
}

export default Donate_book;
