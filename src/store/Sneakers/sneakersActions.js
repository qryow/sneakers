import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { SNEAKERS_API } from "../../helpers/consts";

export const GetSneakers = createAsyncThunk(
  'sneakers/GetSneakers',
  async () => {
    let res = await axios.get(SNEAKERS_API);
    return res;
  }
)