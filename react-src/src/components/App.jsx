import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <div class="vertical-content">
        <Header />
        <Body />
      </div>
    </div>
  );
}
export default App;
