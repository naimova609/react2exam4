import { createAsyncThunk } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_API_CARS;
import axios from "axios";

export const getData = createAsyncThunk("todo/getData", async () => {
    try {
        const { data } = await axios.get(`${url}`)
        return data.data
    } catch (error) { 
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
})