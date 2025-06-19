import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  const [notes , setNotes] = useState([]);
  const onAddNote = () => {
    const newNote = {
      id:1,
      title: "新しいノート",
      content: "新しいノート",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes);
  };
  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote}/>
      <Main />
    </div>

  )
}

export default App
