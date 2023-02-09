// import React from "react";
import Slides from "../../components/Slides/Slides";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Importa la función useFetchContent
import { useFetchContent, getImagesFetch } from "./Fetch/index";

import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../../components/Loader/Loader";
import { getIdImage } from "./Utils/useImageId";

/**
 * Componente Contents
 * Este componente se encarga de mostrar los contenidos obtenidos del API
 * @returns Renderiza un componente Swiper que permite hacer un slide de cada elemento
 */

function Contents() {
  // Obtiene el dispatch de Redux
  const dispatch = useDispatch();
  // Obtiene los datos del estado de Redux
  const data = useSelector((state) => state.content.data);

  // State para el estado de carga
  const [loading, setLoading] = useState(true);
  const [itemSlide, setItemSlide] = useState(0);

  /**
   * useEffect, que se encarga de llamar a la función useFetchContent,
   * para obtener los contenidos de la API
   */
  useEffect(() => {
    useFetchContent(dispatch, setLoading);
  }, [dispatch]);

  /**
   * onSwiperChange, para controlar el cambio de slides y
   * tomar el index del slide actual, para obtener la imagen
   * correspondiente
   */
  const onSwiperChange = (swiper) => {
    setItemSlide(swiper.activeIndex);
  };

  if (!loading) {
    //Aqui, paso el arreglo completo data, y el valor del index del slide
    var id_image = getIdImage(data, itemSlide);
  }
  // Espero optener el id de la imagen para poder reenderizar, todo junto

  /**
   * useEffect, para obtener la imagen correspondiente al id obtenido
   * y renderizarla
   */

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
