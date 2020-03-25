import React from "react";
import Todo from "./todo";
// import Overlay from "./overlay";
import PropTypes from "prop-types";

const Todolist = ({ list, editTodo }) => {
  if (list.length > 0) {
    return list.map(item => (
      <>
        <Todo item={item} key={item.id} editTodo={editTodo} />
        {/* <Overlay
          item={item}
          toggleOverLay={toggleOverLay}
          deleteTodo={deleteTodo.bind(this, item.id)}
        /> */}
      </>
    ));
  } else {
    return (
      <p
        style={{
          color: "#ccc",
          letterSpacing: "4px"
        }}
      >
        nothing to show...
      </p>
    );
  }
};

Todolist.propTypes = {
  list: PropTypes.array
};

export default Todolist;
