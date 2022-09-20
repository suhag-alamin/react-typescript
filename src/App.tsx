import { useCallback, useReducer, useRef } from "react";
import "./App.css";
import Lists from "./components/Lists";

interface Todo {
  id: number;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

function App() {
  const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  };

  const [todos, dispatch] = useReducer(reducer, []);

  const todoRef = useRef<HTMLInputElement>(null);

  const addTodo = useCallback(() => {
    if (todoRef.current) {
      dispatch({ type: "ADD", text: todoRef.current.value });
      todoRef.current.value = "";
    }
  }, []);

  return (
    <div className="App">
      {/* <Lists /> */}
      <input type="text" ref={todoRef} />
      <button onClick={addTodo}>ADD</button>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
            X
          </button>
        </li>
      ))}
    </div>
  );
}

export default App;
