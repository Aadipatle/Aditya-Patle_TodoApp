import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(form));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="form-title">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="form-input"
        required
      />

      <div className="password-field">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="form-input"
          required
        />
        <span
          className="password-toggle"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>

      <Link className="reglink" to="/register">
        Don't have an account? Register
      </Link>

      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};

export default Login;
