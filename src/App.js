import logo from './logo.svg';
import './App.css';

import Greeting from './Greeting';
import Counter from './Counter';
import DataInfo from './DataInfo';

function App() {
  let data = [
    { seq: 1, name: 'Max'},
    { seq: 2, name: 'Tim'},
    { seq: 3, name: 'Jake'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{logo}</p>

        <DataInfo />
        
        <Counter data={data}></Counter>

        <Greeting name={{firstName: 'Max', lastName: 'Hsieh'}} />
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
