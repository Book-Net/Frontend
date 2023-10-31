import React from 'react'

import contact from '../assets/contact.png';

function Contact_us() {
    return (
        <div className='' >

            <div class="grid grid-cols-2 my-14 align-middle justify-items-center">
                <div>

                    <img className='h-[500px]' src={contact} />
                </div>
                <div>
                    <p className="text-[#4F6D7A] text-2xl font-bold mb-6">Contact Us </p>
                    <form class="w-full max-w-lg border-spacing-7 border-[#BF5A36]">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide  text-[#BF5A36]  text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200  text-[#BF5A36]  border-[#BF5A36] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                               
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-[#BF5A36] text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-[#BF5A36] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-[#BF5A36] text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-[#BF5A36] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />

                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-[#BF5A36] text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>

                            </div>
                        </div>
                        <div class="">
                            <div class="">
                                <button class="shadow bg-[#BF5A36]  hover:orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded justify-center" type="button">
                                    Send
                                </button>
                            </div>
                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact_us