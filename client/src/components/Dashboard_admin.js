import React, { useState, useEffect } from 'react'
import Barchart from './Barchart';
import Sales_linechart from './Sales_linechart';
import Bid_linechart from './Bid_linechart';
import Button from "./Button";
import axios from 'axios';
import fake from './fake';

function Dashboard_admin() {

  let totalSalesRevenue = 0;

  const [sales_data, setSales_data] = useState([])

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get("http://localhost:9000/sales");
        setSales_data(response.data);
      
      } catch (error) {
        console.error("Error fetching orderDetails:", error);
        
      }
    };
    fetchSales();
  }, []);
  
  const [sales1, setSales1] = useState([])
  useEffect(() => {
    setSales1(sales_data)
  }, [sales_data]);
console.log(sales1)

//bid Transactions
  const [bids_data, setBids_data] = useState([])

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get("http://localhost:9000/bidding");
        setBids_data(response.data);
      
      } catch (error) {
        console.error("Error fetching orderDetails:", error); 
      }
    };
    fetchSales();
  }, []);
  
  const [bids1, setBids1] = useState([])
  useEffect(() => {
    setBids1(bids_data)
  }, [sales_data]);
console.log(bids1)

//Exchange
const [exchanges_data, setExchanges_data] = useState([])

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const response = await axios.get("http://localhost:9000/sales");
        setExchanges_data(response.data);
      
      } catch (error) {
        console.error("Error fetching orderDetails:", error);
        
      }
    };
    fetchExchange();
  }, []);
  
  const [exchanges_data1, setExchanges_data1] = useState([])
  useEffect(() => {
    setExchanges_data1(exchanges_data)
  }, [exchanges_data]);
console.log(exchanges_data1)

//Donate
const [donates_data, setDonates_data] = useState([])

  useEffect(() => {
    const fetchDonate = async () => {
      try {
        const response = await axios.get("http://localhost:9000/donates");
        setDonates_data(response.data);
      
      } catch (error) {
        console.error("Error fetching orderDetails:", error);
        
      }
    };
    fetchDonate();
  }, []);
  
  const [donates_data1, setDonates_data1] = useState([])
  useEffect(() => {
    setDonates_data1(donates_data)
  }, [donates_data]);
console.log(donates_data1)


  return (
    <div className='p-0 h-[auto]'>

      <div className='grid grid-cols-4 gap-4'>
         <div className='col-span-1 border-2 border-[#F1E6D9] bg-[#F2CB9E] h-2/5 mt-3 p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>2000</p>   
         </div>

         <div className='col-span-3'>
           <Barchart />
         </div>
      </div>
        
      <div className='grid grid-cols-2 gap-4'>

      {
      
      sales1.map((saleOrder,index)=>
          {
            // console.log(saleOrder)
            totalSalesRevenue+=saleOrder.total

          }
      )
      }
          <div className='col-span-1'>
          <div className='border-2 border-[#3498db] rounded-lg bg-[#f0f0f0] p-3'>
          <p className='text-[#3498db] text-xl font-semibold mb-2'>Sales Summary</p>
          <div className='flex justify-between items-center'>
          <p className='text-[#333333] text-base font-medium'>Total Income:</p>
          <p className='text-[#2ecc71] text-lg font-semibold'>Rs. {totalSalesRevenue}</p>
  </div>
  <div className='flex justify-between items-center'>
    <p className='text-[#333333] text-base font-medium'>Total Profit:</p>
    <p className='text-[#e74c3c] text-lg font-semibold'>Rs. {totalSalesRevenue * 0.05}</p>
  </div>
  <div className='flex justify-between items-center mt-3'>
    <p className='text-[#333333] text-base font-medium'>Number of Sales:</p>
    <p className='text-[#555555] text-lg font-semibold'>{sales1.length}</p>
  </div>
</div>

  

            <div>
                 
                <Sales_linechart sales={totalSalesRevenue}/>
            </div>
          </div>

          <div className='col-span-1'>
          <div className='border-2 border-[#3498db] rounded-lg bg-[#f0f0f0] p-3'>
          <p className='text-[#3498db] text-xl font-semibold mb-2'>Bids Summary</p>
          <div className='flex justify-between items-center'>
          <p className='text-[#333333] text-base font-medium'>Number of Bids:</p>
          <p className='text-[#2ecc71] text-lg font-semibold'>{bids1.length}</p>
  </div>
</div>

  

            <div>
                <Bid_linechart bids={bids1.length} />
            </div>
          </div>
         
      </div>

      <div className='grid grid-cols-4 gap-4'>
         <div className='col-span-2 border-2 my-8 mr-5 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Swap Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'> {exchanges_data1.length}</p>   
         </div>

         <div className='col-span-2 border-2 my-8 mr-5 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Donate Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>{donates_data1.length}</p>   
         </div>
      </div> 

    </div>

  )
}

export default Dashboard_admin;