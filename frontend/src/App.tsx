import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { useAppSelector } from './hooks/redux';

import './styles/App.css';

function App() {
  const users = useAppSelector(state => state.users);
  // console.log('POSTS ARRAY');
  // console.log(posts);

  return (
    <div className="app__wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
