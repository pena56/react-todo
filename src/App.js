import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Todo from './components/Todo';
import Signin from './components/Signin';

function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="">
      {user ? (
        <>
          <Header />
          <Todo />
        </>
      ) : (
        <>
          <Signin />
        </>
      )}
    </div>
  );
}

export default App;
