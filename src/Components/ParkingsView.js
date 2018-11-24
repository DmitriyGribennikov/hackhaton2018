import React, { Component } from 'react';


class ParkingsPage extends Component {

    componentDidMount() {
        this.props.fetchParkings()
    }
    render() {
        return <div> parkings </div>;
    }
}


export default ParkingsPage;
