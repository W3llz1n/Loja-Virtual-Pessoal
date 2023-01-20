import logo from './logo.svg';
import './App.css';
import HelloWorld from './component/HelloWorld';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <HelloWorld
          text='Hello World!!!'
        />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
