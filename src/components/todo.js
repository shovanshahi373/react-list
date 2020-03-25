import React from "react";
// import styled from "styled-components";
import { Button } from "../styles/main";

const Todo = ({ item: { title, description, id, completed }, editTodo }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "3px",
          borderBottom: "1px solid #ccc",
          padding: "10px 0"
        }}
      >
        <div>
          <p>
            <b>title:{"  "}</b>
            <span
              style={{ textDecoration: completed ? "line-through" : "initial" }}
            >
              {title}
            </span>
          </p>
          <p>
            <b>description:{"  "}</b>
            {description.length > 25
              ? description
                  .split("")
                  .slice(0, 25)
                  .join("") + "..."
              : description}
          </p>
        </div>
        <Button onClick={editTodo.bind(this, id)}>EDIT</Button>
      </div>
    </>
  );
};

export default Todo;
