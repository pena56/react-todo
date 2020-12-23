import React, { useState } from 'react';

import TodoModal from './TodoModal';

function Todo({ todoItem }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="p-3">
      <div
        className="d-flex justify-content-between p-3 bg-white rounded shadow"
        onClick={() => setModalShow(true)}
      >
        <div
          style={{
            borderLeft: `${todoItem.completed ? '3px solid blue' : 'none'}`,
          }}
          className="pl-2"
        >
          <p className="m-0 mb-2 h5">{todoItem.todo}</p>
        </div>
      </div>

      <TodoModal
        todo={todoItem}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Todo;
