import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserProfile from '../helpers/userProfile';
import axios from 'axios';
import '../assets/css/card.css';

interface Genre {
    genrename: string,
    genredescription: string,
    origin: string
}

function OneGenre({genrename, genredescription, origin}:Genre) {
  return (
    <Card>
      <Card.Body id="bodyGenre">
        <Card.Title className='text-light'>genre: {genrename}</Card.Title>
        <Card.Subtitle className='text-secondary'>origin: {origin}</Card.Subtitle>
        <Card.Text>
            description: {genredescription}
        </Card.Text>
        <Button variant="primary">add</Button>
      </Card.Body>
    </Card>
  );
}

const Genrello:React.FC = () => {
    const [genres,setGenre] = useState<Genre[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`http://localhost:4000/genres`)
                    .then((response) => {
                        console.log(response.data);
                        setGenre(response.data);
                    })
            } catch(err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Genres </h2>
            {genres.map(genre => 
                <OneGenre genrename={genre.genrename} genredescription={genre.genredescription} origin={genre.origin}/>
            )}
        </div>
    );
}

export default Genrello;