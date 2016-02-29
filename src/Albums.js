import React from 'react';

export default class Albums extends React.Component {
    render() {
        const name = this.props.name;
        const year = this.props.year;
        return <div>
            <h1>{name} - {year}</h1>
        </div>;
    }
}