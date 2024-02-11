import * as React from 'react';
import logo from '../assets/images/logo-db.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../assets/css/landing.css';

export default function SignUp() {
  return (
    <div className="LandingBody">
      <img src={logo} id="logoLandingPage" alt="logo" />
      <main>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email" />
            <Form.Text className="text-muted text-gray">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>nickname</Form.Label>
            <Form.Control type="text" placeholder="nickname" />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>firstName</Form.Label>
            <Form.Control type="text" placeholder="firstname" />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>locality</Form.Label>
            <Form.Control type="text" placeholder="firstname" />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>bestInstrument</Form.Label>
            <Form.Control type="text" placeholder="firstname" />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button id="submitBtn" className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </main>
    </div>

  );
}