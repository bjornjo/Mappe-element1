import React from 'react';

export default class App extends React.Component {

    constructor(){
        super();

    }

    sortYear(albums){
        this.setState({})
    }
//.sort(function(a,b){return a.year - b.year})
    render() {

        return <div>

            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>ARTIST</th>
                        <th>YEAR</th>
                    </tr>
                </thead>
                <tbody>

                {this.props.albums.map(album =>
                    <tr>
                        <td>{album.title}</td>
                        <td>{album.artist}</td>
                        <td>{album.year}</td>
                    </tr>)}
                </tbody>


            </table>

        </div>;
    }
}