import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import MacWindows from './MacWindows';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './notes.scss'
const Notes = () => {
    const [markdown,setMarkdown] = useState(null);

    useEffect(() =>{
        fetch('/note.txt')
        .then(res => res.text())
        .then(text => setMarkdown(text))
    },[])
  return (
    <MacWindows>
        <div className='notes'>
            { markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
        </div>
    </MacWindows>
  )
}

export default Notes
