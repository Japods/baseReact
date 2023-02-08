import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Slides({ element }) {
  const image = useSelector((state) => state.image.image);
  // console.log(images, "images element");

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
      // onChange={recoverImage(element.images)}
    >
      <Link to={`/contents/details/${element._id}`}>
        <div className="position-des-title space-y-5 ml-10">
          <h2 className="title-image text-black">{element.title.original}</h2>
          <p className="description-image text-black">
            {element.description.plain.original}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Slides;
