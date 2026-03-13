import { createSlice } from "@reduxjs/toolkit";

let ContactSlice = createSlice({
  name: "ContactSlice",
  initialState: {
    contactUs: {
      name: "",
      email: "",
      message: "",
    },
  },
  reducers: {
    handelContactInput(state, action) {
      let { value, name } = action.payload;
      state.contactUs[name] = value;
    },
  },
});

export default ContactSlice;

export const { handelContactInput } = ContactSlice.actions;
// action => { type , payload }

// payload => data
