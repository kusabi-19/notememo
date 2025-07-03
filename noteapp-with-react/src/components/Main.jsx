import React from 'react'
import "./Main.css"
import ReactMarkdown from 'react-markdown';

const Main = ({activeNode , onUpdateNote}) => {
  const onEditNote = (key , value) => {
    onUpdateNote({
      ...activeNode , 
      [key] : value,
      modDate : Date.now(),
    })
  }

  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        {activeNode ? (
          <>
            <input
              type="text"
              value={activeNode.title}
              onChange={(e) => onEditNote("title", e.target.value)}
            />
            <textarea
              placeholder="ノート内容を記入"
              value={activeNode.content}
              onChange={(e) => onEditNote("content", e.target.value)}
            />
          </>
        ) : (
          <>
            <input type="text" value="" disabled />
            <textarea placeholder="ノート内容を記入" value="" disabled />
          </>
        )}
      </div>
      <div className='app-main-note-preview'>
        {activeNode ? (
          <>
            <h1 className='preview-title'>{activeNode.title}</h1>
            <div className="markdown-preview">
              <ReactMarkdown>{activeNode.content}</ReactMarkdown>
            </div>          
            </>
        ) : (
          <div className='no-active-note'>ノートが選択されていません</div>
        )}
      </div>
    </div>
  )
}

export default Main