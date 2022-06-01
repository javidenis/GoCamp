import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className='errors-list'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div></div>
      <div className="login-box">
        <h2>Login</h2>
        <div className="user-box">
          <input type="text" name="" required="" value={credential} onChange={(e) => setCredential(e.target.value)} />
          <label>Username/Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <button className='submit-btn' type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </div>
    </form>
  );
}

export default LoginFormPage;