import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./slice/contact.slice";

const store = configureStore({
  reducer: {
    contact: ContactSlice.reducer,
  },
});

export default store;
