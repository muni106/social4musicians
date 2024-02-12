import * as React from 'react';
import logo from '../assets/images/logo-db.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../assets/css/landing.css';
import UserProfile from '../helpers/userProfile';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { httpHelper } from '../helpers/httpHelper';

export default function SignIn() {
  const navigate = useNavigate();
  const [e_mail, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if( e_mail!== "" && pass !== "" ) {
      console.log("submit")
    }
    return navigate('/');
  }
  const api = httpHelper();
  
  

  return (
    <div className="LandingBody">
      <img src={logo} id="logoLandingPage" alt="logo" />
      <main>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNickname">
            <Form.Label>nickname</Form.Label>
            <Form.Control type="email" placeholder="Enter nickname" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button href="/feed" id="submitBtn" className="mt-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </main>
    </div>

  );
}