import { Store } from "react-notifications-component";

/**
 * Este hook se encarga de crear notificaciones
 * @returns {Array} showNotification - Un arreglo con un objeto para llamar las notificaciones
 */

function useNotifications() {
  const showNotification = {
    /**
     * Función que muestra una notificación
     * @param {Object} param0 - Propiedades de la notificación
     * @param {string} param0.title - Título de la notificación
     * @param {string} param0.message - Mensaje de la notificación
     * @param {string} param0.type - Tipo de notificación (info, success, warning, danger)
     */

    callNotifications: ({ title, message, type }) => {
      Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "bottom",
        container: "top-right",
        animationIn: ["animate__animated", "animate__flipInX"],
        animationOut: ["animate__animated", "animate__flipInX"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    },
  };

  return [showNotification];
}

export default useNotifications;
