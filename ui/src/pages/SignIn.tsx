import * as React from 'react';
import logo from '../assets/images/logo-db.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../assets/css/landing.css';
import UserProfile from '../helpers/userProfile';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { httpHelper } from '../helpers/httpHelper';
import axios from 'axios';

export default function SignIn() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios.get(`http://localhost:4000/nicknames`)
      .then((response) => {
        console.log(response.data.includes('munssi'));
        if (response.data.includes(nickname)) {
          document.cookie = `nickname=${nickname}; SameSite=None; Secure`;
          navigate('/feed');
        }
        else console.log('user not found')
      })
      .catch(err => console.log(err))
  }

  //serve un controllo ma vaffanculo

  return (
    <div className="LandingBody">
      <img src={logo} id="logoLandingPage" alt="logo" />
      <main>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNickname">
            <Form.Label>nickname</Form.Label>
            <Form.Control type="text" placeholder="Enter nickname" onChange={e => setNickname(e.target.value)} value={nickname} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button onClick={handleSubmit} id="submitBtn" className="mt-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </main>
    </div>

  );
}