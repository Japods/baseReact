import APIS from "../../services/Apis/index";
import axios from "axios";

export const getContent = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        APIS.SERVE_CORS +
          `${APIS.API_URL}/generic/playlists/details/62ed078f15f4850026b193bd?itemsPerPage=10`
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getContentById = (template) => {
  return new Promise((resolve, reject) => {
    axios
      .get(APIS.SERVE_CORS + `${APIS.API_URL}/ott/contents/${template.id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
