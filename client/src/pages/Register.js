import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../app/authSlice';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register(form));
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2 className="form-title">Register</h2>

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

      <button type="submit" className="form-button">
        Register
      </button>
    </form>
  );
};

export default Register;
