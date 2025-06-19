import React from "react";

function App() {
  const [counter, setCouter] = React.useState(0);
  const onClick = () => {
    // setCouter(counter + 1);
    // useState 의 setter function 은 함수 또는 state 를 parameter 로 받을 수 있음.
    // 함수일 경우 현재 state 를 parameter 로 전달
    // setter 내부에 함수가 있으면 함수 파라미터가 현재 state 값으로 인식되고, 함수가 리턴하는 값이 새로운 state 값으로 바뀐다
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
