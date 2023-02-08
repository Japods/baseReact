// import React from "react";
import Slides from "../../components/Slides/Slides";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Importa la función useFetchContent
import { useFetchContent, getImagesFetch } from "./Fetch/index";

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

  useEffect(() => {
    // Llamada a la función useFetchContent
    useFetchContent(dispatch, setLoading);
    getImagesFetch(dispatch);
  }, [dispatch]);

  return <div>{loading ? "cargando" : <Slides items={data} />}</div>;
}
{
}
export default Contents;
