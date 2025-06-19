import React from "react";

// 별도의 컴포넌트로 분리

function MinutesConverter() {
  const [minutes, setMinutes] = React.useState("");

  const onChange = (e) => {
    setMinutes(e.target.value);
  };

  const reset = () => {
    setMinutes(0);
  };

  return (
    <div>
      <input
        value={minutes}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
      />
      <label htmlFor="minutes">Minutes</label>
      <span> is </span>
      <input
        value={Math.round(minutes / 60)}
        id="hours"
        placeholder="Hours"
        type="number"
        disabled
      />
      <label htmlFor="hours">Hours</label>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function HoursConverter() {
  const [hours, setHours] = React.useState("");

  const onChange = (e) => {
    setHours(e.target.value);
  };

  const reset = () => {
    setHours(0);
  };

  return (
    <div>
      <input
        value={hours}
        id="hours"
        placeholder="Hours"
        type="number"
        onChange={onChange}
      />
      <label htmlFor="hours">Hours</label>
      <span> is </span>
      <input
        value={hours * 60}
        id="minutes"
        placeholder="Minutes"
        type="number"
        disabled
      />
      <label htmlFor="minutes">Minutes</label>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Units Converter</h1>
      <MinutesConverter />
      <HoursConverter />
    </div>
  );
}

export default App;
