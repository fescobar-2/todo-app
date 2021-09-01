import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

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

export { Todo, TodoForm }