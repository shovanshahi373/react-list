import React from "react";
import styled from "styled-components";

export default function Overlay({
  deleteTodo,
  item: { name, overlay, id },
  toggleOverLay
}) {
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

  const Section = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(10, 100%, 0%, 0.9);
    color: black;
    display: ${() => (overlay ? "block" : "none")};
  `;

  const Mesg = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: whitesmoke;
    padding: 10px 20px;
    border-radius: 3px;
    width: 30%;
  `;
  return (
    <Section>
      <Mesg>
        <small
          style={{
            color: "#ccc"
          }}
        >
          {id}
        </small>
        <p>
          The selected todo named "<b>{name}"</b> will be deleted. Are you sure?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <Button onClick={deleteTodo}>yes</Button>
          <Button onClick={toggleOverLay.bind(this, id)}>no</Button>
        </div>
      </Mesg>
    </Section>
  );
}
