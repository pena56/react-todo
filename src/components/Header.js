import React, { useState } from 'react';

import { ProgressBar } from 'react-bootstrap';

import AddTodoModal from './AddTodoModal';

function Header({ profile, todos }) {
  const [modalShow, setModalShow] = useState(false);

  const completedTodos = todos?.filter((todo) =>
    todo.completed ? todo : null
  );

  return (
    <header className="p-3 bg-white rounded mb-3 shadow">
      <div className="d-flex justify-content-between align-items-center">
        <img
          style={{ width: '20%' }}
          src={profile}
          alt="profile"
          className="fluid rounded-circle"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="#007BFF"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
          onClick={() => setModalShow(true)}
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </div>

      <p className="lead m-0">Your Progress</p>

      <div className="d-flex justify-content-between align-items-center">
        <p className="h2">
          Tasks{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
            />
          </svg>
        </p>
        <p className="h5 text-right">
          {completedTodos.length}/{todos?.length}
        </p>
      </div>

      <ProgressBar
        now={
          todos.length === 0 ? 0 : (completedTodos.length / todos.length) * 100
        }
      />
      <AddTodoModal show={modalShow} onHide={() => setModalShow(false)} />
    </header>
  );
}

export default Header;
