import React, { useState, useEffect } from "react";
import "./assets/tailwind.css";
import Card from "./components/Card";
import SearchImg from "./components/SearchImg";
import Header from "./components/Header";

function App() {
  const [img, setImg] = useState([]);
  const [term, setTerm] = useState("");
  // const [color, setColor] = useState("indigo");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=23802701-084d8c7ec2f95769998b17214&q=${term}&image_type=photo&pretty=true`)
      .then((response) => response.json())
      .then((data) => {
        setImg(data.hits);
      })
      .catch((err) => console.log(err));
    // setColor("indigo");
  }, [term]);
  return (
    <>
      <div className="font-manrope">
        <Header />
        <div className="mx-auto text-center">
          <SearchImg searchText={(txt) => setTerm(txt)} />
        </div>
        <div className="grid w-full grid-flow-row grid-cols-1 mx-auto sm:w-4/5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {img.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
