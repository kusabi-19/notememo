import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import uuid from "react-uuid"

function App() {
  const [notes , setNotes] = useState([]);
  const [activeNode , setActiveNode] = useState(false);
  const onAddNote = () => {
    const newNote = {
      id:uuid(),
      title: uuid(),
      content: "新しいノート",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes);
  };

  const onDeleateNote = (id) => {
    const filterNotes = notes.filter( (note) => note.id !== id);
    setNotes(filterNotes)
  }
  return (
    <div className='App'>
      <Sidebar
          onAddNote={onAddNote} 
          notes={notes} 
          onDeleateNote={onDeleateNote}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
       />
      <Main />
    </div>

  )
}

export default App
