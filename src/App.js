import logo from './logo.svg';
import './App.css';
import Matchlists from './Matchlists';
import ToDoList from './ToDoList/ToDoList'
import { useState } from 'react';

function App() {

  const [matchList, setMatchList] = useState(0)
  const [toDoList, setToDoList] = useState(0)

  return (
    <div>
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
        </header>
        <button className='MatchList_Btn' onClick={() => setMatchList(1, setToDoList(0))}>Match List</button>
        <button className='ToDoList_Btn' onClick={() => setToDoList(1, setMatchList(0))}>ToDo List</button>
        <div>
        </div>

        <aside>

          {matchList ? <Matchlists /> : null}
          {toDoList ? <ToDoList /> : null}


        </aside>
      </div>
    </div>
  );
}

export default App;
