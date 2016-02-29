import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

fetch('http://localhost:3000/albums')
    .then(res => res.json())
    .then(albums => {
        ReactDOM.render(
        <App albums={albums} />,
            document.getElementById('container')
        );
    });