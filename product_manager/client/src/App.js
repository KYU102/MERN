import './App.css';
import Detail from './views/Detail';
import Main from './views/Main';
import Update from './components/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Routes>
          {/* ROOT ROUTE FOR MAIN */}
          <Route path="/" element={<Main />} />

          {/* /:book_id ROUTE FOR DETAILS*/}
          <Route path="/:product_id" element={<Detail />} />

          <Route path='/:product_id/edit' element={<Update />} />
        </Routes>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
