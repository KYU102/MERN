import logo from './logo.svg';
import './App.css';
import Newcomp from './Components/newcomp'

function App() {
  return (
    <div>
      <Newcomp age={'45'} name={'Doe, Jane'} hair={'Black'}/> 
      <Newcomp age={'88'} name={'Smith, John'} hair={'Brown'}/> 
      <Newcomp age={'50'} name={'Fillmore, Millard'} hair={'Brown'}/> 
      <Newcomp age={'62'} name={'Smith, Maria'} hair={'Brown'}/> 
    </div>
  );
}

export default App;
