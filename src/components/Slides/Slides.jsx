import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Slides({ items }) {
  return (
    <Swiper className="prueba" spaceBetween={50} slidesPerView={1}>
      {items.map((element, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              style={{
                background: "black",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100vh",
              }}
            >
              <div className="position-des-title space-y-5 ml-10">
                <h2 className="title-image">{element.title.original}</h2>
                <p className="description-image">
                  {element.description.plain.original}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slides;
