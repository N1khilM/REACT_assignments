/*
Todo App v2

Don't build a basic Todo.

Requirements

Add task
Edit task
Delete
Complete
Search
Filter
Due date
Priority
Completed counter
Pending counter
*/


import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState("");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("Medium");
  const [search, setSearch] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editingPriority, setEditingPriority] = useState("Medium");
  const [editingDueDate, setEditingDueDate] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
          dueDate: dueDate,
          priority: priority,
        },
      ]);
      setInputValue("");
      setDueDate("");
      setPriority("Medium");
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditingTodoId(id);
      setEditingTodoText(todoToEdit.text);
      setEditingDueDate(todoToEdit.dueDate);
      setEditingPriority(todoToEdit.priority);
    }
  };

  // sorting todo into seperate categoriess like All,active or completed

  const saveTodo = (id) => {
    if (!editingTodoText.trim()) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: editingTodoText,
              dueDate: editingDueDate,
              priority: editingPriority,
            }
          : todo,
      ),
    );
    setEditingTodoId(null);
    setEditingTodoText("");
    setEditingDueDate("");
    setEditingPriority("Medium");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  let filteredTodos = [];
  let nfilteredTodos = [];

  filteredTodos = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase()),
  );
  if (category === "All") {
    nfilteredTodos = filteredTodos;
  } else if (category === "Completed") {
    nfilteredTodos = filteredTodos.filter((todo) => todo.completed);
  } else {
    nfilteredTodos = filteredTodos.filter((todo) => !todo.completed);
  }

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.length - completedCount;
  const allCount = todos.length;

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={inputValue}
        placeholder="Add a new todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        value={dueDate}
        type="date"
        placeholder="due date"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Top">Top</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button onClick={addTodo}>Add Todo</button>
      <br />
      <input
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <div>
        {nfilteredTodos.length === 0 ? (
          <p>No todos yet!</p>
        ) : (
          nfilteredTodos.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    placeholder="Edit todo"
                    value={editingTodoText}
                    onChange={(e) => setEditingTodoText(e.target.value)}
                    onFocus={(e) => e.target.select()}
                  />
                  <input
                    value={editingDueDate}
                    type="date"
                    placeholder="due date"
                    onChange={(e) => setEditingDueDate(e.target.value)}
                    onFocus={(e) => e.target.select()}
                  />
                  <select
                    id="priority"
                    value={editingPriority}
                    onChange={(e) => setEditingPriority(e.target.value)}
                  >
                    <option value="Top">Top</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </>
              ) : (
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  <br />
                  todo:
                  {todo.text}
                  <br />
                  due date:
                  {todo.dueDate}
                  <br />
                  priority:
                  {todo.priority}
                  <br />
                  <br />
                </span>
              )}
              {editingTodoId === todo.id ? (
                <>
                  <button onClick={() => saveTodo(todo.id)}>Save</button>
                  <button
                    onClick={() => {
                      setEditingTodoId(null);
                      setEditingTodoText("");
                      setEditingDueDate("");
                      setEditingPriority("Medium");
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => editTodo(todo.id)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
      <p>Completed Todos :{completedCount}</p>
      <p>Pending Todos :{pendingCount}</p>
      <p>Total :{allCount}</p>
    </div>
  );
};

export default TodoApp;
