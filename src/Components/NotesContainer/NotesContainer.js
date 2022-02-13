import React from "react";
import classes from "./NotesContainer.module.css";
import Note from "../Note/Note";

const NotesContainer = ({ notes, deleteItems }) => {
  const deleteNote1 = (id) => {
    deleteItems(id);
  };
  return (
    <div className={classes.notesContainer}>
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteItem={deleteNote1}
          />
        );
      })}
    </div>
  );
};

export default NotesContainer;
