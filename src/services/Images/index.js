import APIS from "../Apis/index";
import useNotifications from "../../hooks/Notification/Notifications";

export const getImage = async (template) => {
  const [showNotification] = useNotifications();

  return fetch(
    APIS.SERVE_CORS +
      `${APIS.API_URL}/assets/images/view/${template.id}?type=${template.type}&scale=${template.scale}&placeholder=${template.placeholder}`
  )
    .then((response) => {
      const headerValue = response.headers.get("X-Final-Url");
      return headerValue;
    })
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
