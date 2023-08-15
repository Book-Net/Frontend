import Button from "./Button";

function Book_categories() {
    return (
      <>
      <div className="categoryContainer">

          <div>
            <Button
              className="border-radius-10px bg-[#4F6D7A] text-white my-6 font-bold px-6 shadow-lg"
              type="submit"
            >
            Novels
            </Button>
          </div>

          <div>
            <Button
              className="border-radius-10px bg-[#4F6D7A] text-white my-6 font-bold px-6 shadow-lg"
              type="submit"
            >
            Education
            </Button>
          </div>

          <div>
            <Button
              className="border-radius-10px bg-[#4F6D7A] text-white my-6 font-bold px-6 shadow-lg"
              type="submit"
            >
            Kids
            </Button>
          </div>

          <div>
            <Button
              className="border-radius-10px bg-[#4F6D7A] text-white my-6 font-bold px-6 shadow-lg"
              type="submit"
            >
            Coding
            </Button>
          </div>
          
          
      </div>
      </>
    );
  }
  
  export default Book_categories;