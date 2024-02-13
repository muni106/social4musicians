import React, { useState, useEffect } from 'react';

const SideLeft:React.FC = () => {
    return (
        <aside>
            <h1>Navigate</h1>
                <ul>
                    <a href="/feed"><li>Home</li></a>
                    <a href="/feed"><li>Profile</li></a>
                    <a href="/feed"><li>Band</li></a>
                    <a href="/genres"><li>Genres</li></a>
                </ul>
        </aside>
    );
}

export default SideLeft;