import './App.css';
import Dashboard from './components/Dashboard';
import Detail from './views/Detail';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Main />
      <Detail />
    </fieldset>
  );
}

export default App;
