import './App.css';
import React from "react"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Search from './components/search';
import People from './components/people';
import Planets from './components/planets';

function App() {


  return (
  <div>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Search />} >
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planets />} />
        </Route>
        {/* <Route path= "/:word" element={<Word />} />
        <Route path="/:word/:color/:bgColor" element={<Colors />} /> */}
      </Routes>


    </BrowserRouter>
  </div>
  );
}

export default App;
