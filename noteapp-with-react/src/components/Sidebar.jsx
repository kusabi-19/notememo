import React from 'react'
import "./Sidebar.css"

const Sidebar = ({
  onAddNote , 
  notes , 
  onDeleateNote , 
  activeNode, 
  setActiveNode
}) => {

const sortedNotes = notes.sort((a , b) => b.modDate - a.modDate);


  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-header'>
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className='app-sidebar-notes'>
        {sortedNotes.map((note) => (
          <div className={`app-sidebar-note ${note.id === activeNode && `active`}`} key={note.id} onClick={() => setActiveNode(note.id)}>
            <div className='sidebar-note-title'>
              <strong>{note.title}</strong>
              <button onClick={() => onDeleateNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>最後の修正日{new Date(note.modDate).toLocaleDateString("jp", {
              hour: "2-digit",
              minute: "2-digit",
            }) }</small>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Sidebar 