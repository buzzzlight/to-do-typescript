import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

export default App;

// 자바스크립트 -> 타입스크립트 마이그레이션
// 1. 타입선언 패키지 설치
// 2. tsconfig.json
// 3. 모든 js파일 -> jsx파일
// 4. 하나씩 tsx형식으로 만들고 오류 해결
