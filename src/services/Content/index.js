import APIS from "../Apis/index";
import useNotifications from "../../hooks/Notification/Notifications";

export const getContent = () => {
  const [showNotification] = useNotifications();

  return fetch(
    APIS.SERVE_CORS +
      `${APIS.API_URL}/generic/playlists/details/62ed078f15f4850026b193bd?itemsPerPage=10`
  )
    .then((response) => {
      if (response.status === 403) {
        showNotification.callNotifications({
          title: "CORS ACTIVOS",
          message: "Leer la documentacion README.md",
          type: "danger",
        });

        return;
      }
      return response.json();
    })
    .catch((errr) => {
      if (errr) {
        showNotification.callNotifications({
          title: errr,
          message: errr,
          type: "danger",
        });
      }
    });
};

export const getContentById = (template) => {
  const [showNotification] = useNotifications();

  return fetch(APIS.SERVE_CORS + `${APIS.API_URL}/ott/contents/${template.id}`)
    .then((response) => {
      if (response.status === 403) {
        showNotification.callNotifications({
          title: "CORS ACTIVOS",
          message: "Leer la documentacion README.md",
          type: "danger",
        });
      }
      response.json();
    })
    .then((data) => data.data)
    .catch((err) => {
      if (err) {
        showNotification.callNotifications({
          title: err,
          message: err,
          type: "danger",
        });
      }
    });
};
