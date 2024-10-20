// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Auth.css'; // Import shared CSS for Login/Signup

const Signup = () => {
    const navigate = useNavigate(); // Initialize navigate function
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/signup', formData);
            navigate('/login'); // Redirect to login after successful signup
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="user">User</option>
                        <option value="farmer">Farmer</option>
                    </select>
                    <button type="submit">Signup</button>
                    {error && <p className="auth-error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Signup;
