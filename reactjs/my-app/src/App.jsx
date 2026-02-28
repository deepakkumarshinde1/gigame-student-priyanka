import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
function App() {
  let [inputText, setInputText] = useState("");
  let [list, setList] = useState([]);
  let [toggle, setToggle] = useState(false);

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
        <button>Toggle</button>

        <div className="toggle-container">
          <label className="toggle-switch">
            <input
              type="checkbox"
              onChange={() => {
                setToggle(!toggle);
              }}
              checked={toggle}
            />
            <span className="slider"></span>
          </label>

          <p className="toggle-text">Status:{toggle ? "True" : "False"} </p>
        </div>
      </section>
      <section>
        <ul>
          {list.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </section>
      <Counter />
    </>
  );
}

export default App;
