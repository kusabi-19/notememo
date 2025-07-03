import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import uuid from "react-uuid"

function App() {
  const [notes , setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNode , setActiveNode] = useState(false);

  useEffect (() => {
    localStorage.setItem("notes" , JSON.stringify(notes))
  } , [notes]);

  useEffect (() => {
    setActiveNode(notes[0].id)
  } , []);
  const onAddNote = () => {
    const newNote = {
      id:uuid(),
      title: "新しいノート",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes);
  };

  const getActiveNote = () => {
    return notes.find( (note) => note.id === activeNode)
  }

  const onDeleateNote = (id) => {
    const filterNotes = notes.filter( (note) => note.id !== id);
    setNotes(filterNotes)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note ; 
      }
    });

    setNotes(updatedNotesArray);
  };

  return (
    <div className='App'>
      <Sidebar
          onAddNote={onAddNote} 
          notes={notes} 
          onDeleateNote={onDeleateNote}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
       />
      <Main activeNode={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>

  )
}

export default App
