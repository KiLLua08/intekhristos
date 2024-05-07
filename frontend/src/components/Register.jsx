import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4444/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Display success message
        // Redirect to Home page
        window.location.href = '/';
      } else {
        alert(data.message); // Display error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input type="text" placeholder="Username" name="username" value={username} onChange={e => onChange(e)} required />
      <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required />
      <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;