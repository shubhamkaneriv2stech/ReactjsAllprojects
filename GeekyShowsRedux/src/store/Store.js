import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../actions/counterSlice";
import themeReducer from "../components/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});
