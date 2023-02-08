import APIS from "../../services/Apis/index";

export const getImage = async (template) => {
  return fetch(
    APIS.SERVE_CORS +
      `${APIS.API_URL}/assets/images/view/${template.id}?type=${template.type}&scale=${template.scale}&placeholder=${template.placeholder}`
  )
    .then((response) => {
      const headerValue = response.headers.get("X-Final-Url");
      return headerValue;
    })
    .catch((err) => {
      console.error(err);
    });
};
