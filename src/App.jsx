// import { useState } from 'react'
import { NavBar} from './components/NavBar'
import { Intro} from './components/Intro'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar className='nav'/>
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
