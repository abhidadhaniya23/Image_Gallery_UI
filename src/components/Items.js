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
      <div className="flex flex-col items-center justify-center p-2 mx-3 mt-2 text-center rounded-md align-center">
        <i className={`flex items-center justify-center w-10 h-10 mb-2 text-purple-600 bg-purple-200 rounded-full fa fa-download`}></i>
        <span>{numFormatter(image.downloads)}</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 mx-3 mt-2 text-center rounded-md align-center">
        <i className={`flex items-center justify-center w-10 h-10 mb-2 text-purple-600 bg-purple-200 rounded-full fa fa-eye`}></i>
        <span>{numFormatter(image.views)}</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 mx-3 mt-2 text-center rounded-md align-center">
        <i className={`flex items-center justify-center w-10 h-10 mb-2 text-purple-600 bg-purple-200 rounded-full fab fa-gratipay`}></i>
        <span>{numFormatter(image.likes)}</span>
      </div>
    </>
  );
}

export default Items;
