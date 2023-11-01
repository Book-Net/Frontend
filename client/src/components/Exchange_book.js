import React from "react";

function Exchange_book({onChange}) {
    return (
            <div className="sm:col-span-2">
                <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">What I want</label>
                    <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="Tell us what you looking for..." 
                    type="text"
                    onChange={onChange}
                    maxLength={25}
                    required 
                    />
                </div>
            </div>
    );
}

export default Exchange_book;
