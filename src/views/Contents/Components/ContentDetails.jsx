import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContentByIdFetch } from "../Fetch/index";
import Loader from "../../../components/Loader/Loader";

/**
 * Componente para mostrar los detalles del contenido.
 */

function ContentDetails() {
  // Obtiene el ID del contenido a partir de los parámetros de la ruta.
  const { id } = useParams();
  // Se utiliza el hook de `useDispatch` para obtener una referencia al despachador de acciones de Redux.
  const dispatch = useDispatch();
  // Se utiliza el hook de `useSelector` para acceder a los valores del estado de Redux.
  const element = useSelector((state) => state.content.element);
  const image = useSelector((state) => state.image.image);
  // Controla el estado de carga.
  const [loading, setLoading] = useState(true);

  /**
   * Efecto de React que se ejecuta al montar el componente.
   * Obtiene los detalles del contenido utilizando una función de fetch y el despachador de acciones.
   */

  useEffect(() => {
    getContentByIdFetch(id, dispatch, setLoading);
  }, [dispatch]);

  // Renderiza un componente de carga o los detalles del contenido.
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="position-des-title space-y-5 ml-10">
            <h2 className="title-image text-black">{element.title.original}</h2>
            <p className="description-image text-black">
              {element.description.plain.original}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentDetails;
