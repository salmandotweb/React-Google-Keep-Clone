import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./CreateNote.module.css";

function CreateNote({ passData }) {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const showTitle = () => {
    setShow(true);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleData = (e) => {
    e.preventDefault();
    if (note.title || note.content !== "") {
      passData(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleData(e);
    }
  };

  return (
    <form className={classes.form}>
      {show && (
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleInputs}
        />
      )}
      <textarea
        name="content"
        id=""
        cols="20"
        rows="3"
        typeof="submit"
        placeholder="Take a note..."
        value={note.content}
        onClick={showTitle}
        onChange={handleInputs}
        onKeyPress={handleSubmit}
      ></textarea>

      <button type="submit" onClick={handleData} className={classes.addbtn}>
        <FaPlus />
      </button>
    </form>
  );
}

export default CreateNote;
