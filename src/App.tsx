import { useState, useRef, useEffect } from "react";
import "./App.css";

import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
    </div>
  );
}

export default App;

// 자바스크립트 -> 타입스크립트 마이그레이션
// 1. 타입선언 패키지 설치
// 2. tsconfig.json
// 3. 모든 js파일 -> jsx파일
// 4. 하나씩 tsx형식으로 만들고 오류 해결
