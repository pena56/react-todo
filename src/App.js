import { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header';
import Todo from './components/Todo';
import Signin from './components/Signin';

import { auth, googleProvider, db } from './firebase';

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const fetchTodos = () => {
      db.collection('tasks')
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTodos(data);
          console.log(data);
        });
    };

    fetchTodos();
  }, []);

  return (
    <div className="app">
      {user ? (
        <>
          <Header todos={todos} profile={user?.photoURL} />
          {todos.length === 0 ? (
            <p className="h3 text-center">No Todos Available</p>
          ) : (
            todos.map((todo) => <Todo key={todo.id} todoItem={todo} />)
          )}
        </>
      ) : (
        <>
          <Signin callback={signInWithGoogle} />
        </>
      )}
    </div>
  );
}

export default App;
