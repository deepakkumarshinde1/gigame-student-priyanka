import { createContext, useContext, useState } from "react";

// create context
let UserContext = createContext({});

// create a custom hook (consume a context)
export function useUserContext() {
  let context = useContext(UserContext);
  return context;
}
// create a wrapper component
export function UserContextProvider(props) {
  let [userData] = useState({
    username: "Deeepakkumar",
  });
  let shared = {
    username: userData.username,
  };
  return (
    <UserContext.Provider value={shared}>{props.children}</UserContext.Provider>
  );
}
