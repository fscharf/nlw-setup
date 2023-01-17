import React from 'react'
import Habit from './components/habit'

import './styles/global.css'

function App() {
  return (
    <React.Fragment>
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={10} />
    </React.Fragment>
  )
}

export default App
