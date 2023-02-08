import React, { useEffect } from "react";
import axios from "axios";
import useNotifications from "../Notification/Notifications";

/**
 * Custom Hook para manejar los errores de la aplicación.
 *
 * @returns {void}
 */

const useHandleError = () => {
  // Obtiene la función para mostrar notificaciones.
  const [showNotification] = useNotifications();

  useEffect(() => {
    // Agrega un interceptor a Axios para manejar las respuestas.
    axios.interceptors.response.use(
      (res) => {
        // Verifica si existe un error en la respuesta.
        if (res.data.error) {
          // Muestra una notificación con los detalles del error.
          showNotification.callNotifications({
            title: res.data.error.userMessage.es,
            message: res.data.error.userMessage.es,
            type: "danger",
          });
        }
      },
      (error) => {
        // Muestra una notificación con los detalles del error.

        console.log(error, "erre");
        showNotification.callNotifications({
          title: error.response.status,
          message: error.message,
          type: "danger",
        });
        // Devuelve una promesa rechazada con el error.
        return Promise.reject(error);
      }
    );
  }, []);
};

export default useHandleError;
