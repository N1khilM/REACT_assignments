/*
display list of tasks
title,checkbox, delete
form title
search
filterbystatus
empty
*/

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  function deltask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }
  const filteredTasks = tasks.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "done"
          ? t.done === true
          : statusFilter === "Pending"
            ? t.done === false
            : true;

    return matchSearch && matchStatus;
  });

  function Add() {
    setTasks([...tasks, { id: Date.now(), title: title, done: false }]);
    setTitle("");
  }
  function toggleDone(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <button type="button" onClick={() => Add()}>
          Add
        </button>
      </form>
      <button onClick={() => setStatusFilter("all")}>All</button>
      <button onClick={() => setStatusFilter("done")}>Done</button>
      <button onClick={() => setStatusFilter("Pending")}>Pending</button>
      {filteredTasks.length < 1
        ? "No tasks found"
        : filteredTasks.map((t) => (
            <div key={t.id}>
              <p style={{ textDecoration: t.done ? "line-through" : "none" }}>
                {t.title}
              </p>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleDone(t.id)}
              />
              <button type="button" onClick={() => deltask(t.id)}>
                Delete Task
              </button>
            </div>
          ))}
    </>
  );
}
