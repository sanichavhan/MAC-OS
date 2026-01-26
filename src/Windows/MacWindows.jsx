import React from 'react'
import { Rnd } from 'react-rnd'
import './macWindows.scss'
const MacWindows = ({children,width = "40vw",height = "40vh"}) => {
  return (
    <Rnd default={{
        width: width,
        height : height,
        x : 500,
        y : 100
    }}
    >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="user">
                    <div className="user1">Sani Chavhan - zsh</div>
                </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindows
