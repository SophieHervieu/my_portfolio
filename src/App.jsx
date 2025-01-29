// import { useState } from 'react'
import { NavBar} from './components/NavBar'
import { Intro} from './components/Intro'
import { Projects } from './components/Projects'
import { Apropos } from './components/Apropos'
import { Footer } from './components/Footer'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <NavBar className='nav'/>
      <Intro />
      <Projects />
      <Apropos />
      <Footer />
    </div>
  )
}

export default App
