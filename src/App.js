import React, { useState, useEffect, useRef } from "react";
import TodoList from "./components/todolist";
import Input from "./components/input";
import Overlay from "./components/overlay";
import { Button } from "./styles/main";
import uuid from "uuidv4";

const LOCAL_STORAGE_KEY = "LISTS";

export default function App() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    completed: false
  });
  const [list, setList] = useState([]);
  const [showOverLay, SetShowOVerLay] = useState(false);
  const [showInputOverLay, SetShowInputOverLay] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  useEffect(() => {
    const harvestedList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (harvestedList) setList(JSON.parse(harvestedList));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  const arrangeList = arr => {
    const compArr = arr.filter(el => el.completed);
    const pendArr = arr.filter(el => !el.completed);
    return [...pendArr, ...compArr];
  };

  const handleChange = async e => {
    await setTodo({ ...todo, [e.target.name]: e.target.value });
    console.log("title: " + todo.title);
    console.log("description: " + todo.description);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      lastModified: new Date().toTimeString()
    };
    console.log(newTodo);
    setTodo({ title: "", description: "", completed: false });
    if (todo.title.length < 5)
      return alert("title should have 5 or more characters");
    const newList = arrangeList([...list, newTodo]);
    setList(newList);
    SetShowInputOverLay(!showInputOverLay);
    // inputRef.current.focus();
  };

  const updateTodo = id => {
    const cloneList = [...list];
    const selectedTodoIndex = cloneList.findIndex(item => item.id === id);
    cloneList[selectedTodoIndex].title = todo.title;
    cloneList[selectedTodoIndex].description = todo.description;
    cloneList[selectedTodoIndex].completed = todo.completed;
    cloneList[selectedTodoIndex].lastModified = new Date().toTimeString();
    setList(arrangeList(cloneList));
    SetShowOVerLay(!showOverLay);
    console.log("after updating....");
    console.log(cloneList[selectedTodoIndex]);
    setTodo({ title: "", description: "", completed: false });
  };

  const editTodo = id => {
    const selectedTodo = list.filter(item => item.id === id)[0];
    SetShowOVerLay(!showOverLay);
    setSelectedTodo(selectedTodo);
    const { title, description, completed } = selectedTodo;
    setTodo({ title, description, completed });
    console.log(selectedTodo);
  };

  const deleteTodo = id => {
    const delItem = list.filter(item => item.id !== id);
    setList(delItem);
    console.log(delItem);
    SetShowOVerLay(!showOverLay);
    setTodo({ title: "", description: "", completed: false });
  };

  // const inputRef = useRef(null);
  const checkboxRef = useRef(null);
  return (
    <>
      {showOverLay ? (
        <Overlay
          todo={todo}
          handleChange={handleChange}
          selectedTodo={selectedTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          checkboxRef={checkboxRef}
          showOverlay={SetShowOVerLay}
          setTodo={setTodo}
        />
      ) : null}
      {showInputOverLay ? (
        <Input
          // Ref={inputRef}
          todo={todo}
          emptyTodo={setTodo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          showInput={SetShowInputOverLay}
        />
      ) : null}

      <div
        style={{
          width: "40%",
          zIndex: 999,
          border: "4px solid green",
          borderRadius: "10px",
          margin: "auto",
          padding: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h1
            style={{
              textAlign: "center"
            }}
          >
            TO-DO LIST
          </h1>
          <Button onClick={() => SetShowInputOverLay(!showInputOverLay)}>
            + Add new
          </Button>
        </div>

        <TodoList list={list} editTodo={editTodo} />
      </div>
    </>
  );
}
