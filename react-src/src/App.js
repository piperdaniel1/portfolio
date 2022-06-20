import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAzgunv6LViydUs4uoFeu7sPcw1iC6Vbs0",
  authDomain: "pd1-portfolio.firebaseapp.com",
  projectId: "pd1-portfolio",
  storageBucket: "pd1-portfolio.appspot.com",
  messagingSenderId: "628997129708",
  appId: "1:628997129708:web:28cbe076f5631778e06cc9",
  measurementId: "G-ZFWLKQES02"
};

const firebaseApp = initializeApp(firebaseConfig);

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      turn: 1
    }
  }

  render() {
    const row_style = {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
    }

    const cell_style = {
      width: '100px',
      height: '100px',
      border: '2px solid black',
      'font-size': '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <div className="board">
        {this.state.board.map((row, rowIndex) => {
          return (
            <div style={row_style} className="row" key={rowIndex}>
              {row.map((cell, cellIndex) => {
                return (
                  <div className="cell" style={cell_style} key={cellIndex}>
                    {cell}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Behold, the future awaits. </h1>
        <Board />
      </header>
    </div>
  );
}
export default App;
