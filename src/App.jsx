import React from "react";

function App() {
  const [counter, setCouter] = React.useState(0);
  const onClick = () => {
    setCouter(counter + 1);
  };
  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
