import React from "react";

function App() {
  const [counter, setCouter] = React.useState(0);
  const onClick = () => {
    // setCouter(counter + 1);
    // useState 의 setter function 은 함수 또는 state 를 parameter 로 받을 수 있음.
    // 함수일 경우 현재 state 를 parameter 로 전달
    setCouter((current) => current + 1);
  };
  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
