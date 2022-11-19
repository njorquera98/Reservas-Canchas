import './App.css';
import React from 'react';
import Router from './Router';
import Header from './Header'

function App() {
  return (
    <div>
    <header>
    {
      <Header></Header>
    }
    </header>


    <main>
      <Router />
    </main>
    </div>
  );
}

export default App;