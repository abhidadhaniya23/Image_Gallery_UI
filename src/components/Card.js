import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../assets/tailwind.css";
import Items from "./Items";

function Card({ image }) {
  // const [stopLoading, setStopLoading] = useState(false);
  let tags = image.tags.split(", ");

  return (
    <div className={`w-[80%] hover:shadow-lg duration-200 hover:-translate-y-1 sm:w-[95%] mb-8 rounded-md bg-blue-100 overflow-hidden`}>
      <div className="w-full h-[13rem] object-contain overflow-hidden">
        <LazyLoadImage src={image.webformatURL} alt="" effect="blur" key={image.id} />
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        {image.user !== "Photo-View" ? <h2 className={`text-2xl sm:text-3xl text-center text-blue-700`}>Photo By {image.user}</h2> : <h2 className={`text-3xl text-blue-700`}>Photo By Me</h2>}
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Items image={image} />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center text-sm">
          {tags.map((hashTag, index) => (
            <button key={index} className={`my-2 p-2 text-blue-700 mx-0.5 border-[2px] bg-blue-50 border-blue-700 rounded-full`}>
              #{hashTag}
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center">
          <a href={image.pageURL} rel="noreferrer" target="_blank" className="mx-2 mt-2 text-white bg-blue-700 rounded-md jellyBtn">
            Get More
          </a>
          <a href={image.largeImageURL} download className="mx-2 mt-2 text-white bg-blue-700 rounded-md jellyBtn">
            Download
          </a>
        </div>
        {/* <div className="loading"></div> */}
      </div>
    </div>
  );
}

export default Card;
