import React from "react";
import {
  Button,
  Section,
  Mesg,
  Checkbox,
  InputField,
  TextArea,
  Pill,
  CancelButton
} from "../styles/main";

export default function Overlay({
  selectedTodo: { id, lastModified },
  todo,
  updateTodo,
  deleteTodo,
  handleChange,
  checkboxRef,
  showOverlay,
  setTodo
}) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  return (
    <Section>
      <Mesg>
        <CancelButton
          onClick={() => {
            setTodo({ title: "", description: "", completed: false });
            showOverlay(false);
          }}
        >
          <i className='fas fa-times fa-2x' title='cancel'></i>
        </CancelButton>
        <small
          style={{
            color: "#ccc"
          }}
        >
          {id}
        </small>
        <form action='' method='POST'>
          <table colspacing='25px'>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <InputField
                    type='text'
                    name={"title"}
                    value={todo.title}
                    onChange={e => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <TextArea
                    name={"description"}
                    cols='30'
                    rows='10'
                    onChange={e => handleChange(e)}
                    value={todo.description}
                  />
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  {todo.completed ? (
                    <Pill style={{ backgroundColor: "green" }}>completed</Pill>
                  ) : (
                    <Pill>pending</Pill>
                  )}
                </td>
              </tr>
              <tr>
                <td>Last Updated</td>
                <td>{lastModified}</td>
              </tr>
            </tbody>
          </table>
          <div style={style}>
            <div>
              <Button onClick={() => updateTodo(id)}>update Todo</Button>
              <Button onClick={() => deleteTodo(id)}>Delete Todo</Button>
            </div>
            <input
              type='checkbox'
              ref={checkboxRef}
              checked={todo.completed}
              hidden
            />
            <Checkbox
              onClick={() => setTodo({ ...todo, completed: !todo.completed })}
            >
              {todo.completed ? (
                <i
                  style={{
                    color: "green",
                    margin: "0 0 11px 14px"
                  }}
                  className='fas fa-check'
                ></i>
              ) : null}
            </Checkbox>
          </div>
        </form>
      </Mesg>
    </Section>
  );
}
