import React, { ChangeEvent, useEffect } from 'react';
import logo from '../assets/images/logo-db.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../assets/css/landing.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate();
  const [nickname, setNickName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [pass, setPass] = useState('');
  const [locality, setLocality] = useState('');
  const [bestinstrument, setInstrument] = useState('');
  const [telephonenumber, setTel] = useState('');
  const [e_mail, setEmail] = useState('');
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { telephonenumber, pass, e_mail, nickname, firstname, lastname, locality, bestinstrument }
      console.log(body);
      await fetch(`http://localhost:4000/try`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      navigate('/feed');
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="LandingBody">
      <a href="/">
      <img src={logo} id="logoLandingPage" alt="logo" />
      </a>
      <main>
        <Form>
          <Form.Group className="mt-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="e_mail" onChange={e => setEmail(e.target.value)} value={e_mail} />
            <Form.Text className="text-muted text-gray">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicNickname">
            <Form.Label>nickname</Form.Label>
            <Form.Control type="text" placeholder="nickname" onChange={e => setNickName(e.target.value)} value={nickname} />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormFirstName">
            <Form.Label>firstName</Form.Label>
            <Form.Control type="text" placeholder="firstname" onChange={e => setFirstName(e.target.value)} value={firstname} />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="FormSecondName">
            <Form.Label>lastName</Form.Label>
            <Form.Control type="text" placeholder="lastname" onChange={e => setLastName(e.target.value)} value={lastname} />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasic">
            <Form.Label>locality</Form.Label>
            <Form.Control type="text" placeholder="locality" onChange={e => setLocality(e.target.value)} value={locality} />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasiBestInstrument">
            <Form.Label>bestInstrument</Form.Label>
            <Form.Control type="text" placeholder="bestInstrument" onChange={e => setInstrument(e.target.value)} value={bestinstrument} />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicTelephone">
            <Form.Label>telephone</Form.Label>
            <Form.Control type="text" placeholder="tel." onChange={e => setTel(e.target.value)} value={telephonenumber} />
            <Form.Text className="text-muted text-gray">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setPass(e.target.value)} value={pass} />
          </Form.Group>
            <Button href='/feed' id="submitBtn" className="mt-3 mx-3" variant="primary" onClick={submitData} type="submit">
              Submit
            </Button>
            <Button href='signin' className='mt-3 mx-3'>
              Login
              </Button>
        </Form>

      </main>
    </div>

  );
}