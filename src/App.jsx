import Dock from './components/Docs'
import Nav from  './components/Nav'
import './app.scss'
import MacWindows from './Windows/MacWindows'
import Github from './Windows/Github'
import Notes from './Windows/Notes'
import Resume from './Windows/Resume'
import './Windows/Resume'
import Spotify from './Windows/Spotify'
function App() {

  return (
    
      <main>
        <Dock />
        <Nav />
        <Github />
        <Notes />
        <Resume />
        <Spotify />
      </main>
  )
}

export default App
