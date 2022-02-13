import { useState } from "react";
import CreateNote from "./Components/CreateNote/CreateNote";
import Navbar from "./Components/Navbar/Navbar";
import NotesContainer from "./Components/NotesContainer/NotesContainer";

function App() {
  const [addNote, setAddNote] = useState([]);
  const handleInfo = (note) => {
    setAddNote((prevData) => {
      return [...prevData, note];
    });
  };
  const deleteNote2 = (id) => {
    setAddNote((oldData) =>
      oldData.filter((currData, index) => {
        return index !== id;
      })
    );
  };
  return (
    <main>
      <Navbar />
      <CreateNote passData={handleInfo} />
      <NotesContainer notes={addNote} deleteItems={deleteNote2} />
    </main>
  );
}

export default App;
