import logo from "./logo.svg";
import "./App.css";
import Xe from "./Xe.js";
import Car from "./Car.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Car color="blue" value="Xanh" />
        <Xe color="blue" value="Xanh"></Xe>
        <Xe color="red" value="Đỏ"></Xe>
      </header>
    </div>
  );
}

export default App;
