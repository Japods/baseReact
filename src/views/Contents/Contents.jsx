// import React from "react";
import Slides from "../../components/Slides/Slides";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentImage from "./ContentImage";
// Importa la función useFetchContent
import { useFetchContent } from "./Fetch/index";

/**
 * Componente Contents
 * Este componente se encarga de mostrar los contenidos obtenidos del API
 */

function Contents() {
  // Obtiene el dispatch de Redux
  const dispatch = useDispatch();
  // Obtiene los datos del estado de Redux
  const data = useSelector((state) => state.content.data);

  console.log(data, "data que llega");
  // State para el estado de carga
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);

  useEffect(() => {
    // Llamada a la función useFetchContent
    useFetchContent(dispatch, setLoading);
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        "cargando"
      ) : (
        <>
          <Slides items={data} />
          <ContentImage />
        </>
      )}
    </div>
  );
}
{
}
export default Contents;
