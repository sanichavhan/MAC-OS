import React from 'react'
import MacWindows from './MacWindows'
import './spotify.scss'
const Spotify = () => {
  return (
    <MacWindows width='25vw' height='60vh'>
    <div className='spotify-window'>
      <iframe src="https://open.spotify.com/embed/album/1elLqA5MSahm277HsEFHJ5?utm_source=generator" frameborder="0"></iframe>
    </div>
    </MacWindows>
  )
}

export default Spotify
