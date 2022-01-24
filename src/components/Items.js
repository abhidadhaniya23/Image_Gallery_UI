import React from "react";
import "../assets/tailwind.css";

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

function Items({ image }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-2 mx-1.5 mt-2 text-center rounded-md sm:mx-2.5 align-center">
        <i className={`flex items-center justify-center w-10 h-10 mb-2 text-blue-600 bg-blue-200 rounded-full fab fa-gratipay`}></i>
        <span className="font-normal text-blue-800 font-poppins">{numFormatter(image.likes)}</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 mx-1.5 mt-2 text-center rounded-md sm:mx-2.5 align-center">
        <i className={`flex items-center justify-center w-10 h-10 mb-2 text-blue-600 bg-blue-200 rounded-full fa fa-eye`}></i>
        <span className="font-normal text-blue-800 font-poppins">{numFormatter(image.views)}</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 mx-1.5 mt-2 text-center rounded-md sm:mx-2.5 align-center">
        <i className={`flex items-center justify-center w-10 h-10 mb-2 text-blue-600 bg-blue-200 rounded-full fa fa-comment-dots`}></i>
        <span className="font-normal text-blue-800 font-poppins">{numFormatter(image.comments)}</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 mx-1.5 mt-2 text-center rounded-md sm:mx-2.5 align-center">
        <i className={`flex items-center justify-center w-10 h-10 mb-2 text-blue-600 bg-blue-200 rounded-full fa fa-cloud-download-alt`}></i>
        <span className="font-normal text-blue-800 font-poppins">{numFormatter(image.downloads)}</span>
      </div>
    </>
  );
}

export default Items;
