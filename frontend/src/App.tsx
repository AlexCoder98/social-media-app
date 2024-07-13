import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { initialAppState, reducer } from './reducer/reducer';
import { AppContext } from './context/AppContext';

import './styles/App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialAppState)
  const appContextProviderValue = {
    state: state,
    dispatchFn: dispatch
  }

  console.log('State in App component ' + state.isUserLoggedIn);

  return (
    <BrowserRouter>
      <AppContext.Provider value={appContextProviderValue}>
        <div className="app__wrapper">
          <Header />
          <Main />
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
