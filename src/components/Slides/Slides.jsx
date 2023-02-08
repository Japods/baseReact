import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function Slides({ items }) {
  const recoverImage = (value) => {
    value.map((element) => {
      console.log(element);
    });
  };
  return (
    <Swiper className="box-slide" spaceBetween={50} slidesPerView={1}>
      {items.map((element, index) => {
        return (
          <SwiperSlide
            key={index}
            onSlideChange={() => console.log("slide change")}
          >
            <div
              style={{
                background: "black",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100vh",
              }}
            >
              <Link to={`/contents/details/${element._id}`}>
                <div className="position-des-title space-y-5 ml-10">
                  <h2 className="title-image">{element.title.original}</h2>
                  <p className="description-image">
                    {element.description.plain.original}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slides;
