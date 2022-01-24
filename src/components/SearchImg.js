import { useState } from "react";
import "../assets/tailwind.css";

function SearchImg({ searchText }) {
  const [txt, setTxt] = useState("");

  const searchImgFn = (event) => {
    event.preventDefault();
    searchText(txt);
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form onSubmit={searchImgFn} className="w-full mx-auto text-center">
        <input type="text" onChange={(e) => setTxt(e.target.value)} className={`md:w-[30rem] p-4 duration-200 border-2 border-transparent rounded-md w-[85%] shadow-lg outline-none focus:border-purple-700`} placeholder="Search for any images" />
        <button className={`absolute p-3 text-white duration-300 translate-y-[0.35rem] -translate-x-[5rem] bg-purple-600 rounded-md shadow-md focus:bg-purple-800`}>Search</button>
      </form>
    </div>
  );
}

export default SearchImg;
