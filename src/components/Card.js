import "../assets/tailwind.css";
import Items from "./Items";

function Card({ image }) {
  let tags = image.tags.split(",");

  return (
    <div className={`w-[80%] sm:w-[95%] mb-8 bg-purple-100`}>
      <img src={image.webformatURL} alt="" />
      <div className="flex flex-col items-center justify-center p-4">
        {image.user !== "Photo-View" ? <h2 className={`text-3xl sm:text-xl text-center text-purple-700`}>Photo By {image.user}</h2> : <h2 className={`text-3xl text-purple-700`}>Photo By Me</h2>}
        <div className="flex flex-row">
          <Items image={image} />
        </div>
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
