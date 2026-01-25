import React from 'react'
import MacWindows from './MacWindows'
import './resume.scss'
const Resume = () => {
  return (
    <MacWindows>
        <div className='resume'>
            <iframe src="/resume.pdf" type="" />
        </div>
    </MacWindows>
  )
}

export default Resume
