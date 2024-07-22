import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { useAppSelector } from './hooks/redux';

import './styles/App.css';

function App() {
  const posts = useAppSelector(state => state.posts.posts);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users').then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
    })
  }, [])

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
