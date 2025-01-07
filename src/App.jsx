import Home from './components/Home'

import Battlepage from './components/Battlepage'
import { useState } from 'react'


function App() {
  const [getdata , setGetdata]= useState({});
console.log(getdata)
  return (
    <>
      <Home  sendToParent={setGetdata}/>
     
      <Battlepage getdata={getdata}/>
    </>
  )
}

export default App
