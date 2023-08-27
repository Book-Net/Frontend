import React from "react";

function AddFor_Exchange() {
    return (
        <div>

            <section class="bg-white  py-4 w-[850px] m-auto rounded-lg shadow-inherit mt-6">
                <div class="py-4 px-4 mx-auto max-w-2xl">
                    <p className="topics text-[#4F6D7A] text-3xl text-center font-semibold mb-8 mt-5">Add Book For Bid</p>

                    <form action="#">
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
                        <div className="flex justify-between">
                            <button className=" items-center px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#4F6D7A]">
                               Back
                            </button>
                            <button className="items-center px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#BF5A36]">
                              Add
                            </button>
                        </div>

                    </form>
                </div>
            </section>

        </div>


    );
}

export default AddFor_Exchange;
