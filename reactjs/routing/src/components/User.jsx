import React, { forwardRef } from "react";
import { useUserContext } from "../context/user.context";

function User(props, ref) {
  let { username } = useUserContext();
  return (
    <div>
      User, {username} <input type="text" ref={ref} />
    </div>
  );
}

export default forwardRef(User);
