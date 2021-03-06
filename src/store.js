import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";

export default configureStore({
  reducer: {
    user: loginReducer,
  },
});
