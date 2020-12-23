import React from 'react';

import image from '../img/signin.svg';

function Signin({ callback }) {
  return (
    <div className="d-flex flex-column">
      <img
        style={{ height: '50%', width: 'auto', objectFit: 'contain' }}
        src={image}
        alt="banner"
      />
      <p className="h4 text-center">Track your Activities</p>
      <button
        onClick={callback}
        className="btn btn-primary btn-lg text-uppercase"
      >
        Sign In with Google
      </button>
    </div>
  );
}

export default Signin;
