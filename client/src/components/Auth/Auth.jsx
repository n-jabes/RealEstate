import React, { useState } from 'react';
import './Auth.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsLockFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Auth() {
  const [action, setAction] = useState('Sign Up');
  return (
    <div className="main">
      <Link to="/" className="back">
        <MdOutlineKeyboardBackspace />
        <span>Back</span>
      </Link>
      <div className="container">
        {/* <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div> */}
        <div className="loginSignup">
          <div
            className={action === 'Login' ? 'submit gray' : 'submit'}
            onClick={() => setAction('Sign Up')}
          >
            Sign up
          </div>
          <div
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={() => setAction('Login')}
          >
            Login
          </div>
        </div>
        <form action="#">
          <div className="inputs">
            {action === 'Login' ? (
              <div className="none"></div>
            ) : (
              <div className="input">
                <div className="img">
                  <BsFillPersonFill className="icon" />
                </div>
                <input type="text" placeholder="Name" required />
              </div>
            )}

            <div className="input">
              <div className="img">
                <AiFillMail className="icon" />
              </div>
              <input type="email" placeholder="Email" required />
            </div>
            {action === 'Login' ? (
              <div className="none"></div>
            ) : (
              <div className="input">
                <input
                  type="file"
                  className="profile"
                  placeholder="Choose profile"
                />
              </div>
            )}

            <div className="input">
              <div className="img">
                <BsLockFill className="icon" />
              </div>
              <input type="password" placeholder="Password" required />
            </div>
          </div>
          <div className="extra">
            {action === 'Login' ? (
              <div className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
            ) : (
              <div className="none"></div>
            )}

            {action === 'Login' ? (
              <div className="forgot-pass flex">
                Forgot password? <span>Reset</span>
              </div>
            ) : (
              <div className="none"></div>
            )}
          </div>
          <input type="submit" value={action} className="submit-btn" />
        </form>
      </div>
    </div>
  );
}

export default Auth;
