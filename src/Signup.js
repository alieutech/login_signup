import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = ({ onSignup }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignup(email, password, confirmPassword);
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicFullname'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type='fullname' value={fullname} onChange={(e) =>setFullname(e.target.value)} placeholder='Full name' />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="btn btn-primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
