import React from 'react';

function PaymentSuccessPage() {
  return (
    <div className="container flex items-center justify-center h-screen px-4 py-8 mx-auto">
      <div className="p-8 text-center bg-white rounded-lg shadow-lg">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className="mb-4 text-2xl font-bold text-green-500">Payment Successful</h1>
        <p className="text-lg">
          Thank you for your purchase. Your payment was successful.
        </p>
        <button className="mt-6 px-6 py-3 text-white bg-[#BF5A36] rounded-lg hover:bg-yellow-800">
          Done
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
