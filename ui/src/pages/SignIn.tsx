import * as React from 'react';
import logo from '../assets/images/logo-db.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../assets/css/landing.css';

export default function SignIn() {
  return (
    <div className="LandingBody">
      <img src={logo} id="logoLandingPage" alt="logo" />
      <main>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button id="submitBtn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </main>
    </div>

  );
}