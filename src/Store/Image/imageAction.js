import APIS from "../../services/Apis/index";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImage = createAsyncThunk(
  "images/getImage",
  async (template, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        APIS.SERVE_CORS +
          `${APIS.API_URL}/assets/images/view/${template.id}?type=${template.type}&scale=${template.scale}&placeholder=${template.placeholder}`,
        {
          headers: {
            "Content-Type": "image/png",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
