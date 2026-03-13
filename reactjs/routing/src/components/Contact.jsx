import React from "react";
import { Outlet } from "react-router-dom";
import { handelContactInput } from "../redux/slice/contact.slice";
import { useDispatch } from "react-redux";

function Contact() {
  // action
  let dispatch = useDispatch();

  let _handelChange = (event) => {
    let { value, name } = event.target;
    dispatch(handelContactInput({ value, name }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        defaultValue=""
        onChange={_handelChange}
      />
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        defaultValue=""
        onChange={_handelChange}
      />
      <textarea
        type="text"
        placeholder="Enter Message"
        name="message"
        defaultValue=""
        onChange={_handelChange}
      ></textarea>
      Contact. <Outlet />
    </div>
  );
}

export default Contact;
