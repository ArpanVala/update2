import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'

const App = () => {
  const [genre,setGenre]=useState();
  return (
    <div>
      <Navbar setGenre={setGenre}/>
      <NewsBoard genre={genre}/>
    </div>
  )
}

export default App
