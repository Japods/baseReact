// import React from "react";
import Slides from "../../components/Slides/Slides";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Importa la función useFetchContent
import { useFetchContent, getImagesFetch } from "./Fetch/index";

import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../components/Loader/Loader";
import { getIdImage } from "./Functions/useImageId";
/**
 * Componente Contents
 * Este componente se encarga de mostrar los contenidos obtenidos del API
 */

function Contents() {
  // Obtiene el dispatch de Redux
  const dispatch = useDispatch();
  // Obtiene los datos del estado de Redux
  const data = useSelector((state) => state.content.data);

  // State para el estado de carga
  const [loading, setLoading] = useState(true);
  const [itemSlide, setItemSlide] = useState(0);

  useEffect(() => {
    // Llamada a la función useFetchContent
    useFetchContent(dispatch, setLoading);
  }, [dispatch]);

  const onSwiperChange = (swiper) => {
    // Por cada Slide, tomo el valor de la posicion del slide,
    //para luego usarlo y compararlo con el index, del arreglo de las imagenes
    setItemSlide(swiper.activeIndex);
  };

  if (!loading) {
    //Aqui, paso el arreglo completo data, y el valor del index del slide
    var id_image = getIdImage(data, itemSlide);
  }
  // Espero optener el id de la imagen para poder reenderizar, todo junto

  useEffect(() => {
    if (!id_image) {
      return;
    }
    getImagesFetch(dispatch, id_image);
  }, [id_image]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={onSwiperChange}
        >
          {data.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <Slides element={element} index={itemSlide} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}

export default Contents;
