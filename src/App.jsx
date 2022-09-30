import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Meme from './components/Meme/Meme'

function App() {
  return(
    <div className='--app-app-container'>
      <Navbar />
      <Meme />
    </div>
  )
}

export default App
