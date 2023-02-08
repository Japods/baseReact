import APIS from "../Apis/index";
import useNotifications from "../../hooks/Notification/Notifications";

export const getContent = () => {
  const [showNotification] = useNotifications();

  return fetch(
    APIS.SERVE_CORS +
      `${APIS.API_URL}/generic/playlists/details/62ed078f15f4850026b193bd?itemsPerPage=10`
  )
    .then((response) => response.json())
    .catch((errr) => {
      if (errr) {
        showNotification.callNotifications({
          title: "Sin permisos",
          message: "Leer la documentacion",
          type: "danger",
        });
      }
    });
};

export const getContentById = (template) => {
  const [showNotification] = useNotifications();

  return fetch(APIS.SERVE_CORS + `${APIS.API_URL}/ott/contents/${template.id}`)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((err) => {
      if (err) {
        showNotification.callNotifications({
          title: "Sin permisos",
          message: "Leer la documentacion",
          type: "danger",
        });
      }
    });
};
