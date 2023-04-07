import React from 'react';
import '../styles/App.css';
import Body from './Body';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div class="vertical-content">
        <Body />
      </div>
    </div>
  );
}
export default App;
