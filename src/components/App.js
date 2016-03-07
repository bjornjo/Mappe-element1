import React from 'react';

import Albums from './Albums.js';

export default class App extends React.Component {
    render() {
        return <div>

            <table>
            {this.props.albums.map(album => <tr>
                <td>{album.title}</td>
                <td>{album.artist}</td>
                <td>{album.year}</td></tr>)}
            </table>

        </div>;
    }
}