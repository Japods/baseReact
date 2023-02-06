import APIS from "../../services/Apis/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContent = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(APIS.SERVE_CORS + `${APIS.API_URL}/ott/contents`)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
