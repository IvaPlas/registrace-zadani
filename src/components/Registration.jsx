import React from 'react';
import { useState } from 'react';
import './registration.css';

const Registration = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleUserName = (e) => {
    setUser({ ...user, userName: e.target.value });
  };

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
    if (user.userName === '' && user.email.includes('@')) {
      const defName = user.email.slice(0, user.email.indexOf('@'));
      setUser({ ...user, userName: defName });
    }
  };

  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handlePasswordConfirm = (e) => {
    setUser({ ...user, passwordConfirm: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.passwordConfirm === user.password && user.password !== '') {
      alert(`Thank you for your registration.`);
    } else {
      alert(`Passwords don't match!`);
    }
  };

  return (
    <div className="registration-panel">
      <h1>REGISTRATION</h1>
      <div className="user-icon">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
        </svg>
      </div>
      <form action="registration" className="registration-form">
        <input
          type="text"
          placeholder="User Name"
          value={user.userName}
          onChange={handleUserName}
        />
        <input
          type="email"
          placeholder="Email Adress"
          value={user.email}
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handlePassword}
        />
        <input
          type="password"
          placeholder="Password Confirm"
          value={user.passwordConfirm}
          onChange={handlePasswordConfirm}
        />
        <button type="submit" onClick={handleSubmit}>
          REGISTER
        </button>
      </form>
    </div>
  );
};
export default Registration;
