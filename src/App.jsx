import React from "react";

// Memo

// 기본 동작 :
// - 부모 컴포넌트가 리렌더링될 때 자식 컴포넌트도 항상 리렌더링
// - props가 변경되지 않았어도 리렌더링 발생

// React.memo 사용 시:
// - props의 변경 여부를 체크
// - props가 변경되지 않았다면 이전 렌더링 결과를 재사용
// - 불필요한 리렌더링 방지

function Btn({ text, changeValue }) {
  console.log(text, "was rendered.");
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "20px 30px",
        border: 0,
        borderRadius: 10,
      }}
      onClick={changeValue} // 이 onClick 이 button 의 eventlistener
    >
      {text}
    </button>
  );
}

const MemorizedBtn = React.memo(Btn);

function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => {
    if (value === "Save Changes") {
      setValue("Revert Changes");
    } else {
      setValue("Save Changes");
    }
  };
  return (
    <div>
      <MemorizedBtn text={value} changeValue={changeValue} />
      <MemorizedBtn text="Continue" />
    </div>
  ); // 여기 있는 changeValue 는 eventlistener 가 아니라 props 임!!!
}

export default App;
