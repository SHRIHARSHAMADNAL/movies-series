import React from 'react';
import './Header.scss'
export const Header = () => {
  return (
    <header className='header'>
      <div className="header-left">
        <h1>DEMO Streaming</h1>
      </div>
      <div className="header-right">
        <button>Login</button>
        <button>Start Free Trial</button>
      </div>
    </header>
  );
};

