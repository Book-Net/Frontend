function Book_name_author({title, author}) {
    return (
      <>
      <div>
        <p className="font-bold mb-2 w-full overflow-hidden text-xl text-left text-[#4F6D7A]">
        {title}
        </p>
        <p className="text-left text-md mb-2 text-[#4F6D7A]">
        {author}
        </p>
      </div>
      </>
    );
  }
  
  export default Book_name_author;