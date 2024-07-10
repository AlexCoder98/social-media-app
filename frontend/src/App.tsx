import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
