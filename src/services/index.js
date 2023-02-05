import axios from "axios";
import APIS from "./Apis/index";

const getContent = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(APIS.SERVE_CORS + `${APIS.API_URL}/generic/playlists/`)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getImages = (template) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        APIS.SERVE_CORS +
          `${APIS.API_URL}/assets/images/view/${template.id}?type=${template.type}&scale=${template.scale}$placeholder=${template.placeholder}`
      )
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// const getDetailsById = (template) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(APIS.SERVE_CORS + `${APIS.API_URL}/ott/contents`)
//       .then((data) => {
//         resolve(data.data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

export default {
  getContent,
  getImages,
  // getDetailsById,
};
