import React from "react";
import {
  Section,
  Mesg,
  Button,
  InputField,
  TextArea,
  CancelButton
} from "../styles/main";
const input = ({
  Ref,
  // todo: { title },
  handleChange,
  handleSubmit,
  showInput,
  emptyTodo
}) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column"
  };
  return (
    <Section>
      <Mesg>
        <form method='POST' style={style}>
          <InputField
            type='text'
            ref={Ref}
            name={"title"}
            // value={title}
            onChange={e => handleChange(e)}
            placeholder='add a todo...'
            // onKeyPress={handlesubmitonenter}
          />
          <TextArea
            name={"description"}
            cols='30'
            rows='10'
            placeholder={"description..."}
            onChange={e => handleChange(e)}
          ></TextArea>
          <div>
            <Button
              onClick={e => {
                handleSubmit(e);
              }}
            >
              add todo
            </Button>
            <CancelButton
              onClick={() => {
                emptyTodo({ title: "", description: "" });
                showInput(false);
              }}
            >
              <i className='fas fa-times fa-2x' title='cancel'></i>
            </CancelButton>
          </div>
        </form>
      </Mesg>
    </Section>
  );
};

export default input;
