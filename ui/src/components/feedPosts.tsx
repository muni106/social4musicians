import React from 'react';
import logo from '../assets/images/logo-db.png';
import '../assets/css/landing.css';
import Header from '../components/header';
import UserProfile from '../helpers/userProfile';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import '../assets/css/card.css';

interface CardProps {
    title: string;
    musician: string;
    discussionText: string
}

function SinglePost({title,musician,  discussionText}: CardProps) {
    return (
        <Card className="my-4 carta">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{musician}</Card.Subtitle>
            <Card.Text>
                {discussionText}
            </Card.Text>
            <Button variant="primary">like</Button>
            <Button variant="primary">comment</Button>
          </Card.Body>
        </Card>
      );
}

function AllPosts() {
  let userName = UserProfile.getName();

  return (
    <div className="feedBody">
        <SinglePost title="ciao" musician='mounir' discussionText="bulabulabulabula"/>
    </div>
  );
}

export default AllPosts;