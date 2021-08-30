import React from "react";
import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navigation from "./Components/Navigation"

function Todo ({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
      <Button className="me-1" onClick={() => completeTodo(index)}>✓</Button>
      <Button onClick={() => removeTodo(index)}>X</Button>
      </div>
    </div>
  );
};

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return(
    <Container className="mx-auto">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Shopping Item..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <Button className="mt-2" type="submit" value="Submit">Add Item</Button>
      </Form> 
    </Container>
  )
}

function App() {
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
      <Navigation/>
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

export default App;
