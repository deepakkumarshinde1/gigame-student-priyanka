import React from "react";
import { useUserContext } from "../context/user.context";

function User() {
  let { username } = useUserContext();
  return <div>User, {username}</div>;
}

export default User;
