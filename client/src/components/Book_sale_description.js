const Book_sale_description = () => {
  return ( 
      <>
       <div className="flex flex-row">

        <div className="flex flex-col justify-start space-x-8 ">
          <div className="text-red-700 font-bold mb-10">
            <h3>Details</h3>
          </div>
         <div className="text-red-700 font-bold">
           <h3>Description</h3>
         </div>
         </div>
        <div className="flex flex-col justify-start space-x-8 text-left ml-10">
         <div className="flex flex-col text-left- ml-8 mb-10">
           <p className="text-[#4F6D7A] font-bold"> New. In great condition. Published in 1978.</p>
         </div>
         <div className="flex flex-col text-left">
           <p className="text-[#4F6D7A] font-bold">A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.</p>
         </div>
         
        </div>
         
      </div>

      </>
   );
}

export default Book_sale_description;