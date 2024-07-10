import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

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
