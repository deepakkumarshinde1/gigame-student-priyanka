import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0); // [value, function to update value]
  // let [text, setText] = useState("");
  // let [list, setList] = useState([]);
  // let [user, setUser] = useState({
  //   name: "Deepakkumar",
  // });
  // let [toggle, setToggle] = useState(false);

  let inc = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>Counter {counter} </h1>
      <button onClick={inc}>INC</button>
    </>
  );
}

export default Counter;
// state => dynamic data
// hooks => special function
// each hook with "use" prefix
// v16.8+
// inbuilt hooks ( react js ), 3rd party hooks ( other lib ), custom hooks ( self )
// useState => to manage state in functional component
