import APIS from "../../services/Apis/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getImage = createAsyncThunk("getContent", (template) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        APIS.SERVE_CORS +
          `${APIS.API_URL}/assets/images/view/${template.id}?type=${template.type}&scale=${template.scale}&placeholder=${template.placeholder}`,
        {
          headers: {
            "Content-Type": "image/png",
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
});
