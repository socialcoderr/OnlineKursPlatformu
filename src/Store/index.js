// index.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"; // Varsayılan exportu import edin

export const store = configureStore({
  reducer: {
    data: dataReducer, // Burada "datas" yerine "data" kullanabilirsiniz
  },
});
