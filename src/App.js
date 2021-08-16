import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', flex: 1, flexDirection: 'column'}} className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      {/* Hello to the meeting room app */}
      <div style={{height: 100, backgroundColor: "#62DDBD"}} />
      <div style={{flex: 1, backgroundColor: "lightgrey"}} />
    </div>
  );
}

export default App;
