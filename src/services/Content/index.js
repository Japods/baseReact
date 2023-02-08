import APIS from "../Apis/index";

export const getContent = () => {
  return fetch(
    APIS.SERVE_CORS +
      `${APIS.API_URL}/generic/playlists/details/62ed078f15f4850026b193bd?itemsPerPage=10`
  )
    .then((response) => response.json())
    .catch((errr) => {
      console.log(errr);
    });
};

export const getContentById = (template) => {
  return fetch(APIS.SERVE_CORS + `${APIS.API_URL}/ott/contents/${template.id}`)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((err) => {
      console.error(err);
    });
};
