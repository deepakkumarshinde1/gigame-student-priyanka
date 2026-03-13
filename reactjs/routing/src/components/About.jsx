import React, { useRef } from "react";
import User from "./User";

function About() {
  let inputRef = useRef(null);
  let inputRef1 = useRef(null);
  let onClick = () => {
    //inputRef.current.value = "Hello";
    if (inputRef.current.value.length === 0) {
      inputRef.current.focus();
    }

    console.log(inputRef.current.value);
    console.log(inputRef1.current.value);
  };
  return (
    <div>
      <User ref={inputRef} />
      <User ref={inputRef1} />
      <button onClick={onClick}>Click</button>
      About
    </div>
  );
}

export default About;
