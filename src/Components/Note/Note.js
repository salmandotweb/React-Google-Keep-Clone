import React from "react";
import { FaTrash } from "react-icons/fa";
import classes from "./Note.module.css";

const Note = ({ id, title, content, deleteItem }) => {
  const deleteNote = () => {
    deleteItem(id);
  };
  return (
    <div className={classes.note}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button className={classes.deleteBtn} onClick={deleteNote}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Note;
