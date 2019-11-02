import React from "react";
import styled from "styled-components";

const Todo = ({ item: { name, id }, toggleOverLay }) => {
  const Button = styled.button`
    background-color: hsla(314, 35%, 50%, 1);
    color: white;
    border: none;
    margin-left: 20px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.4s background-color;
    &:hover {
      background-color: hsl(314, 35%, 50%, 0.6);
    }
  `;

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
        name: {name}
        <Button onClick={toggleOverLay.bind(this, id)}>delete</Button>
      </div>
    </>
  );
};

export default Todo;
