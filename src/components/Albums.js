import React from 'react';

export default class Albums extends React.Component {
    render() {
        const artist = this.props.artist;
        const title = this.props.title;
        const year = this.props.year;


        return <div>
                        {artist} {title} {year}
        </div>;
    }
}