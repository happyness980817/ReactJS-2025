import React from "react";

function App() {
  const [minutes, setMinutes] = React.useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  return (
    <div>
      <h1>Units Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={minutes}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange} // event handler 들은 event listener 에 의해 호출될 때 자동으로 이벤트 객체를 파라미터로 받음
      />
      <h4>You want to convert {minutes}</h4>
      <label htmlFor="hours">Hours</label>
      <input id="hours" placeholder="Hours" type="number" />
    </div>
  );
}

export default App;
