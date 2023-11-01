import React, { useState, useEffect } from "react";
import Barchart from "./Barchart";
import Sales_linechart from "./Sales_linechart";
import Bid_linechart from "./Bid_linechart";
import Button from "./Button";
import axios from "axios";

function Dashboard_admin() {
  let totalSalesRevenue = 0;

  const [sales_data, setSales_data] = useState([]);

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

  const [sales1, setSales1] = useState([]);
  useEffect(() => {
    setSales1(sales_data);
  }, [sales_data]);
  console.log(sales1);

  return (
    <div className="p-10 h-[auto]">
      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="col-span-1 border-2 rounded-lg border-[#F1E6D9] bg-[#F2CB9E] h-2/6 mt-3 p-4 justify-center font-roboto">
          <p className="text-[#BF5A36]  text-3xl font-bold pr-5">
            Transactions
          </p>
          <p>(For this month)</p>
          <p className="text-[#555555]  text-2xl pl-5">2000</p>
        </div>

        <div className="col-span-3">
          <Barchart />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sales1.map((saleOrder, index) => {
          // console.log(saleOrder)
          totalSalesRevenue += saleOrder.total;
        })}
        <div className="col-span-1">
          <div className="border-2 border-[#3498db] mb-10 rounded-lg bg-[#f0f0f0] p-3">
            <p className="text-[#3498db] text-xl font-semibold mb-2">
              Sales Summary
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#333333] text-base font-medium">
                Total Income:
              </p>
              <p className="text-[#2ecc71] text-lg font-semibold">
                Rs. {totalSalesRevenue}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#333333] text-base font-medium">
                Total Profit:
              </p>
              <p className="text-[#e74c3c] text-lg font-semibold">
                Rs. {totalSalesRevenue * 0.05}
              </p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-[#333333] text-base font-medium">
                Number of Sales:
              </p>
              <p className="text-[#555555] text-lg font-semibold">
                {sales1.length}
              </p>
            </div>
          </div>

          <div>
            <Sales_linechart sales={totalSalesRevenue} />
          </div>
        </div>

        <div className="col-span-1">
          <div className="border-2 rounded-lg my-8 mr-5 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-right font-roboto">
            <p className="text-[#BF5A36] rounded-lg text-3xl font-bold pr-5">
              Bid Transactions
            </p>
            <p>(For this month)</p>
            <p className="text-[#555555]  text-2xl pl-5">100</p>
          </div>

          <div>
            <Bid_linechart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 border-2 my-8 mr-5 rounded-lg border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto">
          <p className="text-[#BF5A36]  text-3xl font-bold pr-5">
            Swap Transactions
          </p>
          <p>(For this month)</p>
          <p className="text-[#555555]  text-2xl pl-5">1000</p>
        </div>

        <div className="col-span-2 border-2 my-8 mr-5 rounded-lg border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto">
          <p className="text-[#BF5A36]  text-3xl font-bold pr-5">
            Donate Transactions
          </p>
          <p>(For this month)</p>
          <p className="text-[#555555]  text-2xl pl-5">500</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_admin;
