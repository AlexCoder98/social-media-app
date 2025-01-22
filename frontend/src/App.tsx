import Router from './routes/router';

import Header from './components/Header/Header';

import './styles/general.scss';

function App() {

  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  )
}

export default App
