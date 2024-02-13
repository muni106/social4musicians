import React, { SyntheticEvent, useEffect, useState } from 'react';
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
    likes: number
}

function SinglePost({ title, musician, discussionText, likes }: CardProps) {
    return (
        <Card className="my-4 carta">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className='musicianPost'>{musician}</Card.Subtitle>
                <Card.Text>
                    {discussionText}
                </Card.Text>
                <div className='buttons'>
                    <div>
                        <Button variant="primary" className='bottone'>❤️ like {likes}</Button>
                    </div>
                    <div>
                        <Button variant="primary" className='bottone'>🗣️ comment</Button>
                    </div>
                </div>

            </Card.Body>
        </Card>
    );
}

interface Discussion {
    discussionid: string,
    timestampdiscussion: Date,
    title: string,
    average: number,
    nickname: string,
    discussiontext: string
}

function AllPosts() {
    let userName = UserProfile.getName();
    let discussions: Discussion[] = [];
    const [ciao, setCiao] = useState<Discussion[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`http://localhost:4000/postsFeed/`,
                    {
                        params:
                            { nickname: userName }
                    })
                    .then((response) => {
                        discussions = response.data;
                        setCiao(response.data);
                        discussions.forEach(disc => console.log(disc.title))
                    })
            }catch(err) {
                console.error(err);
            }
        };

        fetchData();
    }, [])

    
    return (
        <div className="feedBody">
            {ciao? (
                ciao.map(disc => <SinglePost title={disc.title} musician={disc.nickname} discussionText={disc.discussiontext} likes={disc.average} />
                    )
            ): <p>Loding</p> 
                // discussions.map(disc =>
                    // <SinglePost title={disc.title} musician={disc.nickname} discussionText={disc.discussiontext} likes={disc.average} />
                // )
            }
            <SinglePost title="ciao" musician='mounir' discussionText="bulabulabulabula" likes={4} />
        </div>
    );
}

export default AllPosts;