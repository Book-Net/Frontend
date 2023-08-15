

const Book_sale_description = () => {
    return ( 
        <>
         <div className="description-card-container">

          <div className="flex justify-center space-x-8">
            <div className="column-name">
              <h3>Details</h3>
            </div>
           <div className="flex flex-col">
             <p> New. In great condition. Published in 1978.</p>
           </div>
          </div>
          <div className="flex justify-center space-x-8">
           <div className="column-name">
             <h3>Description</h3>
           </div>
           <div className="flex flex-col">
             <p>A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.</p>
           </div>
           
          </div>
           
        </div>
        </>
     );
}
 
export default Book_sale_description;