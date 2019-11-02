import React, { useState, useEffect } from "react";
import TodoList from "./components/todolist";
import uuid from "uuidv4";

const LOCAL_STORAGE_KEY = "LISTS";

export default function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    const harvestedList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (harvestedList) setList(JSON.parse(harvestedList));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);
  const handleChange = e => {
    console.log("run");
    setTodo(e.target.value);
  };
  const handlesubmitonenter = e => {
    if (e.charCode === 13) {
      const newList = [...list, { name: todo, id: uuid(), overlay: false }];
      setList(newList);
      setTodo("");
    }
  };
  const handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    if (!todo) return;
    const newList = [...list, { name: todo, id: uuid(), overlay: false }];
    setList(newList);
    setTodo("");
  };
  const deleteTodo = id => {
    const delItem = list.filter(item => item.id !== id);
    setList(delItem);
    console.log(delItem);
  };
  const toggleOverLay = id => {
    const a = list.find(item => item.id === id);
    a.overlay = !a.overlay;
    const newlist = [...list];
    newlist.splice(list.indexOf(a), 1, a);
    console.log(a);
    setList(newlist);
  };
  return (
    <>
      <input
        type='text'
        placeholder='enter a todo...'
        onChange={handleChange}
        onKeyPress={handlesubmitonenter}
        value={todo}
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <div
        style={{
          width: "40%",
          border: "4px solid yellow",
          borderRadius: "10px",
          padding: "30px",
          margin: "auto"
        }}
      >
        <h1
          style={{
            textAlign: "center"
          }}
        >
          TO DO LIST
        </h1>
        <TodoList
          list={list}
          deleteTodo={deleteTodo}
          toggleOverLay={toggleOverLay}
        />
      </div>
    </>
  );
}
