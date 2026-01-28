import React, { useState } from "react";
import "./App.css";
function App() {
  let [inputText, setInputText] = useState("");
  let [list, setList] = useState([]);

  let onChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  let addTodo = () => {
    setList([inputText, ...list]);
    setInputText("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <section>
        <input type="text" value={inputText} onChange={onChangeHandler} />
        <button onClick={addTodo}>Save Todo</button>
      </section>
      <section>
        <ul>
          <li>Item-1</li>
          <li>Item-1</li>
          <li>Item-1</li>
        </ul>
      </section>
    </>
  );
}

export default App;
