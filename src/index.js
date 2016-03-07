import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';


fetch('http://localhost:3000/albums')
    .then(res => res.json())
    .then(albums => {
        ReactDOM.render(
            <div>
                <App albums={albums} />
            </div>,
            document.getElementById('container')
        );
    });