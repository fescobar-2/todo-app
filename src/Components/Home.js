import React from "react";
import Container from "react-bootstrap/Container";
import { Todo, TodoForm } from "./Todo";

export default function Home() {
  const [todos, setTodos] = React.useState([
  { text: "Fruits",
      isCompleted: false
      },
  { text: "Vegetables",
      isCompleted: false 
  },
  { text: "Water",
      isCompleted: false
  } 
  ]);

  const addTodo = text => {
  const newTodos = [...todos,{ text }];
  setTodos(newTodos);
  }

  const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
  }

  const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
  }

  return (
  <Container className="app">
      <h1 className="p-3 mb-2 text-light">React Shopping List</h1>
      <div className="todo-list">
      {todos.map((todo, index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
      ))}
      <TodoForm addTodo={addTodo} />
      </div>
  </Container>
  );
}