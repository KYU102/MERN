import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/userCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    </div>
  );
}

export default App;
