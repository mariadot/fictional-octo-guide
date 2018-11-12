import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>The content you're looking for does not exist</h1>
            <p>You can go back Home <Link to='/' exact>here</Link></p>
        </div>
    )
}

export default NotFound;