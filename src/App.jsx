import { useState, useEffect } from "react";

// useEffect

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time.");
  useEffect(() => {
    console.log("CALLED THE API!!!");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 1) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); // keyword 가 변화할 때마다 첫번째 argument 코드 실행
  useEffect(() => {
    console.log("I run when the 'counter' OR 'keyword' changes. ");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
