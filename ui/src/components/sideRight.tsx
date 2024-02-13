import React, { useState, useEffect } from 'react';
import UserProfile from '../helpers/userProfile';
import { Card } from 'react-bootstrap';



const SideRight: React.FC = () => {
    let user = UserProfile.getName();

    

    return (
        <aside>
            <h1>Songs</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </aside>
    );
}

export default SideRight;