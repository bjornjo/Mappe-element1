import React from 'react';

import Albums from './Albums.jsx';

export default class App extends React.Component {
    render() {
        return <div>
            {this.props.albums.map(album => <Albums key={album.name} name={album.name} year={album.year}/>)}
        </div>;
    }
}