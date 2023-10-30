import React from "react";





function AddBook_Main_2() {
    return (
        <div>

            <section class="bg-white  py-4 w-[850px] m-auto rounded-lg shadow-inherit mt-6">
                <div class="py-4 px-4 mx-auto max-w-2xl">
                    <p className="topics text-[#4F6D7A] text-3xl text-center font-semibold mb-8 mt-5">Add Book</p>

                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                           
                            <div class="w-full">
                              <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Name of the Book</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Name of the Book" required="" />
                            </div>
                            <div class="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Author</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Author's Name" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Condition</label>
                                <select className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option selected="">Select category</option>
                                    <option value="TV">New</option>
                                    <option value="PC">Used like New</option>
                                    <option value="GA">Used</option>
                                    <option value="PH">Damaged</option>
                                </select>
                            </div>
                            <br />
                            <div className="sm:col-span-2">
                               
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36] text-left">Upload Image</label>
                                
                                <input className="block w-full text-sm text-gray-900 border border-[#BF5A36] border-opacity-30 rounded-lg cursor-pointer bg-gray-50 p-2.5" type="file" />
                                

                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36] text-left">Description</label>
                                <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#BF5A36] border-opacity-30 focus:ring-primary-500 focus:border-primary-500" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button className=" items-center px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#4F6D7A]">
                               Clear
                            </button>
                            <button className="items-center px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#BF5A36]">
                              Next
                            </button>
                        </div>

                    </form>
                </div>
            </section>

        </div>


    );
}

export default AddBook_Main_2;
