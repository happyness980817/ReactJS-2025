function Button({ text, fontSize }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        fontSize,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
