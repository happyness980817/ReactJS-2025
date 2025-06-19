import React from "react";

// Props
// 컴포넌트는 JSX 를 리턴해주는 함수들
// React 컴포넌트는 props 라는 단일 객체를 유일한 매개변수로 받음
// JSX에서 컴포넌트에 전달하는 속성들이 빈 props 객체에 key-value 쌍으로 들어감
// (밑에 App 에서 Btn 태그 안에 text, big 속성들을 할당해서 빈 객체인 props 에 해당 속성들이 할당)
// props는 수정할 수 없는 읽기 전용 객체
// props 로 인해 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 수 있다.

function Btn({ text, big }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "20px 30px",
        border: 0,
        borderRadius: 10,
        fontSize: big ? 36 : 24,
      }}
    >
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      <Btn text="Save Changes" big={true} />
      <Btn text="Continue" />
    </div>
  );
}

export default App;
