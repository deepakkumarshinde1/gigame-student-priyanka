import React, { useCallback, useMemo, useState } from "react";
import HomeChild from "./HomeChild";

function Home() {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);

  let result = useMemo(() => {
    return counter % 5 === 0 ? "Yes" : "No";
  }, [counter]);

  let incCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);
  return (
    <div>
      <button onClick={(event) => setCounter(counter + 1)}>INC</button>
      <h1>{counter}</h1>
      Home
      <HomeChild
        result={result}
        counter2={counter2}
        setCounter2={incCounter2}
      />
    </div>
  );
}

export default Home;
