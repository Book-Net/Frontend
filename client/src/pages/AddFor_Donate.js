import React from "react";

function AddFor_Donate() {
    return (
        <div>

            <section class="bg-white  py-4 w-[850px] m-auto rounded-lg shadow-inherit mt-6">
                <div class="py-4 px-4 mx-auto max-w-2xl">
                    <p className="topics text-[#4F6D7A] text-3xl text-center font-semibold mb-8 mt-5">Add Book For Donate</p>

                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                           
                            <div class="w-full">
                              <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Description</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Description" required="" />
                            </div>
                            <div class="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Pick Up Poin</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your Location" required="" />
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

export default AddFor_Donate;
