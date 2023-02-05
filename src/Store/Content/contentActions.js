import axios from "axios";
import APIS from "../../services/Apis";

const getDetailsById = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(APIS.SERVE_CORS + `${APIS.API_URL}/ott/contents`)
      .then((response) => {
        dispatch({
          type: "GET_DETAILS_SUCCESS",
          payload: response.data.data,
        });
        resolve(response.data);
      })
      .catch((error) => {
        dispatch({ type: "GET_DETAILS_ERROR", error });
        reject(error);
      });
  });
};

export default {
  getDetailsById,
};
