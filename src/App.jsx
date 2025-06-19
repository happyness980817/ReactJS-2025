import { useState, useEffect } from "react";

// useEffect

// useEffect is a function that takes two arguments.
// 첫번째 argument 로 한번만 렌더링하고 싶은 함수를 받는다
// 원래는 state 바뀔때마다 전체 코드가 렌더링됨

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("I run all the time.");
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
