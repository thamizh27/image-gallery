import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(input);
  };

  return (
    <>
      <div className="flex justify-center items-center h-32 sm:flex-row">
        <form className="sm:mx-auto" onSubmit={handleSubmit}>
          <input
            className="md:w-72 mr-5 md:px-3 md:py-3 bg-gray-100 flex-shrink-0 outline-none rounded-xl md:text-lg tracking-wide shadow-md sm:w-44 sm:px-2 sm:py-2 sm:text-base"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search Image..."
          />
          <button className="md:p-3 md:px-6 rounded-xl  md:text-lg focus:outline-none text-green-500 hover:bg-green-500 hover:text-white transition delay-100 cursor-pointer  flex-shrink-0 border-2 border-green-500 tracking-wide sm:px-2 sm:py-2 sm:text-base">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
