import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Parent from './components/Parent';
import MyList from './components/MyList';

function App() {
  return (
    <div className="App">
      <First/>
      <Parent/>
      <MyList/>
    </div>
  );
}

export default App;
