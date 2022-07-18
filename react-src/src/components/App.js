import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
    </div>
  );
}
export default App;
