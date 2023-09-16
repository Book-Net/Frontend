import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Sell_book from "../components/Sell_book";
import Bid_book from "../components/Bid_book";
import Exchange_book from "../components/Exchange_book";


function AddBook_Main() {
    const clearForm = () => {
        setISBN('');
        setSelectedOption('');
        setBookDetails({
          title: '',
          author: '',
          condition: '',
          price: '',
          quantity: '',
          description: '',
        });
      
        // Clear the file input field
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = '';
        }
      };
      


    const [ISBN,setISBN]=useState('');
    const [selectedOption,setSelectedOption] = useState('');
    const [Option, setOption] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

  const [bookDetails, setBookDetails] = useState({
      title: '',
      author: '',
      language:'',
      condition: '',
      publisher: '',
      publishedDate: '',
      pageCount: '',
      previewLink: '',
      averageRating: '', 
      price: '',
      quantity: '',
      // image: '',
      description: '',
      location: '',
      
  });

    //functions

    let selectedComponent;
    let priceInput;
    let minbid;
    let needs;
    let starts;
    let ends;

  switch (Option) {
    case "Sell":
      selectedComponent = <Sell_book />
      priceInput = document.getElementById('price');
      break;
    case "Bid":
      selectedComponent = <Bid_book />;
      starts = document.getElementById('starttime');
      ends = document.getElementById('endtime');
      minbid = document.getElementById('minbid');
      break;
    case "Donate":
      selectedComponent = null;
      break;
    case "Exchange":
      selectedComponent = <Exchange_book />;
      needs = document.getElementById('needs');
      break;
    default:
      selectedComponent = null; // You can set a default component or handle this case as needed
      break;
  }
 

    const fetchBookDetails = async () => {
        try {
          const response = await fetch(`http://localhost:9000/bookDetailFetch/${ISBN}`);
          const data = await response.json();
    
          if (response.status === 200) {
            setBookDetails({
              title: data.title || 'NO INFO',
              author: data.author || 'NO INFO',
              language: data.language || 'NO INFO',
              publisher: data.publisher || 'NO INFO',
              publishedDate: data.publishedDate || 'NO INFO',
              pageCount: data.pageCount || 'NO INFO',
              previewLink: data.previewLink || 'NO INFO',
              averageRating: data.averageRating || 'NO INFO', 
              description: (
                `1. Language: ${data.language}\n` +
                `2. Publisher: ${data.publisher}\n` +
                `3. Published Date: ${data.publishedDate}\n` +
                `4. Author: ${data.author}\n` +
                `5. Page Count: ${data.pageCount}\n` +
                `6. Average Rating: ${data.averageRating}\n\n`
            )
            });
          }
          else if (response.status === 404) {
            // No book found for the given ISBN
            Swal.fire('No book found for the given ISBN.');
          }
          
        } catch (error) {
          console.error('Error fetching book details:', error);
          Swal.fire('An error occurred while fetching book details.');
        }
      };
    
      async function handleSubmit (e) {
        e.preventDefault(); // Prevent default form submission
      
        // Create an object with the form data
        const formData = new FormData();
        formData.append('isbn', ISBN);
        formData.append('title', bookDetails.title);
        formData.append('author', bookDetails.author);
        formData.append('description', bookDetails.description);
        formData.append('condition', selectedOption);
        formData.append('file', file);
        formData.append('location', bookDetails.location);
        formData.append('option', Option);

        switch (Option) {
          case "Sell":
            formData.append('price', priceInput.value);
            break;
          case "Bid":
            formData.append('minbid', minbid.value);
            formData.append('starts', starts.value);
            formData.append('ends', ends.value);
            break;
          case "Donate":
            break;
          case "Exchange":
            formData.append('needs', needs.value);
            break;
          default:
            selectedComponent = null; // You can set a default component or handle this case as needed
            break;
        }
        const config = {
            headers: {
              "content-type": "multipart/form-data"
            }
          };
      
        try {
          // Send the form data to your server using Axios
          const response = await axios.post('http://localhost:9000/add_book_detail_sell', formData,config);
      
          // Handle the response here (e.g., show success message)
          console.log('Form submitted successfully:', response.data);
          if (response.status === 200) {
            Swal.fire('The Book Added Successfully');
          }
      
          // Redirect to the next page or perform any other necessary actions
        } catch (error) {
          // Handle errors (e.g., show an error message)
          console.error('Error fetching book details:', error);
          Swal.fire('An error occurred while saving file to database');
        }
      }
      


    return (
        <div>

            <section className="bg-white  py-4 w-[850px] m-auto rounded-lg shadow-inherit mt-4">
                <div className="py-4 px-4 mx-auto max-w-2xl">
                    <p className="topics text-[#4F6D7A] text-3xl text-center font-semibold mb-4 ">Add Book</p>

                    <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2 ">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">ISBN Number</label>
                            
                                <div className="relative w-full mx-auto">
                                    <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                        placeholder="Enter ISBN Number to Search" 
                                        required 
                                        value={ISBN} 
                                        onChange={(e) => setISBN(e.target.value)}
                                    />
                                        <div className="absolute top-0 right-0 px-5 h-full flex items-center bg-[#BF5A36] rounded-md"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent form submission and page reload
                                            // Get the value of the ISBN input field
                                            const isbnInput = document.getElementById('isbn');
                                            // const isbnValue = isbnInput.value;
                                            if (ISBN == '') {
                                            Swal.fire('Enter ISBN to continue');
                                            // console.log('gI');
                                            } else {
                                            fetchBookDetails();
                                            }  
                                        }}
                                        >
                                            <FiSearch className="text-[#ffffff]" />
                                    </div>
                                </div>


                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Name of the Book</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                placeholder="Name of the Book" 
                                required 
                                readOnly
                                onChange={(e) => setBookDetails({
                                    ...bookDetails,
                                    title:e.target.value
                                    })}
                                value={bookDetails.title}
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Author</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                placeholder="Author's Name" 
                                required
                                readOnly
                                onChange={(e) => setBookDetails({
                                    ...bookDetails,
                                    author:e.target.value
                                    })}
                                value={bookDetails.author}
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Condition</label>
                                <select className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    value={selectedOption}
                                    required
                                    name='condition'
                                    onChange={(e) => {setSelectedOption(e.target.value)}}
                                >
                                    <option selected="">Select category</option>
                                    <option value="New">New</option>
                                    <option value="Used like New">Used like New</option>
                                    <option value="Used">Used</option>
                                    <option value="Damaged">Damaged</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]  text-left">Selling option</label>
                                <select className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    value={Option}
                                    required
                                    name='option'
                                    onChange={(e) => {setOption(e.target.value)}}
                                >
                                    <option selected="">Select selling option</option>
                                    <option value="Sell">Sell</option>
                                    <option value="Bid">Bid</option>
                                    <option value="Donate">Donate</option>
                                    <option value="Exchange">Exchange</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36] text-left">Upload Image</label>
                                <input className="block w-full text-sm text-gray-900 border border-[#BF5A36] border-opacity-30 rounded-lg cursor-pointer bg-gray-50 p-2.5"
                                    type="file"
                                    name="file"
                                    accept="image/*"
                                    required
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36] text-left">Description</label>
                                <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#BF5A36] border-opacity-30 focus:ring-primary-500 focus:border-primary-500" 
                                    placeholder="Your description here"
                                    name="description"
                                    id="description"
                                    onChange={(e) => setBookDetails({
                                      ...bookDetails,
                                      description:e.target.value
                                      })}
                                  value={bookDetails.description}
                                ></textarea>
                            </div>
                            <div className="sm:col-span-2">
                              <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-[#BF5A36]   text-left">Pick Up Point</label>
                                <input className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                placeholder="Your Location" 
                                required
                                id="location"
                                onChange={(e) => setBookDetails({
                                  ...bookDetails,
                                  location:e.target.value
                                  })}
                                value={bookDetails.location}
                                />
                              </div>
                            </div>
                            {selectedComponent}
                            

                        </div>
                        <div className="flex justify-between">
                            <button className=" items-center px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#4F6D7A]"
                                onClick={clearForm}
                            >
                                Clear
                            </button>
                            
                            <button className="items-center px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#BF5A36]"
                                type="submit"
                            >
                                Next
                            </button>
                        </div>

                    </form>
                </div>
            </section >

        </div >


    );
}

export default AddBook_Main;
