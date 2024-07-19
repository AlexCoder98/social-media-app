import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { useAppSelector } from './components/hooks/redux';

import './styles/App.css';

function App() {
  const posts = useAppSelector(state => state.posts.posts);

  console.log('POSTS ARRAY');
  console.log(posts);

  return (
    <div className="app__wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
