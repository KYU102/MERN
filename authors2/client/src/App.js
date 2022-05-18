import './App.css';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './views/Form';
import Update from './components/Update';


function App() {
  return (
    <BrowserRouter >
      <fieldset>
        <legend>App.js</legend>
        <Routes>
          {/* ROOT ROUTE FOR MAIN */}
          <Route path="/" element={<Main />} />

          {/* /:book_id ROUTE FOR DETAILS*/}
          <Route path="/new" element={<Form />} />

          <Route path='/:author_id' element={<Update />} />
        </Routes>
      </fieldset>
      </BrowserRouter>
  );
}

export default App;
