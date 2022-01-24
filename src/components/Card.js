import { useState } from "react";
import "../assets/tailwind.css";
import Items from "./Items";

function Card({ image }) {
  // const [stopLoading, setStopLoading] = useState(false);
  let tags = image.tags.split(", ");

  return (
    <div className={`w-[80%] sm:w-[95%] mb-8 rounded-md bg-purple-100 overflow-hidden`}>
      <div className="w-full max-h-[16rem] overflow-hidden">
        <img src={image.webformatURL} id="img" className="w-full duration-500 hover:scale-110" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        {image.user !== "Photo-View" ? <h2 className={`text-2xl sm:text-3xl text-center text-purple-700`}>Photo By {image.user}</h2> : <h2 className={`text-3xl text-purple-700`}>Photo By Me</h2>}
        <div className="flex flex-row">
          <Items image={image} />
        </div>
        <div className="flex flex-row items-center justify-center">
          <a href={image.pageURL} rel="noreferrer" target="_blank" className="mx-2 text-white bg-purple-700 rounded-md jellyBtn">
            Get More
          </a>
          <a href={image.largeImageURL} download className="mx-2 text-white bg-purple-700 rounded-md jellyBtn">
            Download
          </a>
        </div>
        {/* <div className="loading"></div> */}
        <div className="flex flex-row flex-wrap items-center justify-center text-sm">
          {tags.map((hashTag, index) => (
            <button key={index} className={`my-2 p-2 text-purple-700 mx-0.5 border-[2px] bg-purple-50 border-purple-700 rounded-full`}>
              #{hashTag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
