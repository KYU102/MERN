import React from "react"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Colors from "./Components/Colors";
import Home from "./Components/Home"
import Word from "./Components/Word"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/:word" element={<Word />} />
        <Route path="/:word/:color/:bgColor" element={<Colors />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;