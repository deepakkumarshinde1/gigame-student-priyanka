import React, { memo } from "react";

function HomeChild({ result, setCounter2, counter2 }) {
  return (
    <div>
      HomeChild {result}
      <button onClick={(event) => setCounter2(counter2 + 1)}>INC 2</button>
    </div>
  );
}

export default memo(HomeChild);
