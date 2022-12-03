import './App.css';
import React from 'react';
import Router from './Router';
import Header from './Header'
import Navbar from './Navbar';
import StaticContext from './context/StaticContext'
import {UserContextProvider} from './context/UserContext'
import { RolContextProvider } from './context/RolContext';

function App() {
  return (
    <StaticContext.Provider value={{nombre:'test'}}>
      <UserContextProvider>
        <RolContextProvider>
          <div>
          <header>
          {
            <Header></Header>
          }
          </header>
          <nav>
            <Navbar></Navbar>
          </nav>


          <main>
            <Router />
          </main>
          </div>
        </RolContextProvider>
      </UserContextProvider>
    </StaticContext.Provider>
  );
}

export default App;