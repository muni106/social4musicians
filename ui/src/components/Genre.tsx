import React, { useState, useEffect } from 'react';

interface Genre {
    genrename: string,
    genredescription: string,
    origin: string
}

const Genres:React.FC = () => {
    const [genres,setUsers] = useState<Genre[]>([]);

    useEffect(() => {
        fetch('/api/genre')
            .then((response) => response.json())
            .then((data: Genre[]) => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Users</h2>
                <ul>
                    {genres.map((genre) => (
                     <li key={genre.genrename}>{genre.genredescription}</li>
                     ))}
                </ul>
        </div>
    );
}

export default Genres;