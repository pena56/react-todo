import React, { useState } from 'react';

import TodoModal from './TodoModal';

function Todo() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between p-3 bg-white rounded shadow">
        <div
          style={{ borderLeft: '3px solid blue' }}
          className="pl-2 d-flex flex-column"
          onClick={() => setModalShow(true)}
        >
          <p className="m-0 mb-2 h5">Walk the Dog</p>
          <p className="m-0 text-muted">Time</p>
          <p className="m-0 text-muted">15:00 - 15:30</p>
        </div>
        <button className="p-2 align-self-start border border-primary rounded shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="blue "
            class="bi bi-check2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </button>
        <TodoModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default Todo;
