import React, { Component } from 'react';
import {Container} from 'react-bootstrap'

class RestaurantDetail extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <h1>Details</h1>
                <br />

                <h2>
                    This is a restaurant management application made with React JS.<br />
                    This app uses json-server for data storage and access.<br />
                    In this app you can:
                    <br /><br />
                    <Container>
                    <ul>
                        <li>Create restaurants</li>
                        <li>Update restaurants</li>
                        <li>Delete restaurants</li>
                        <li>View restaurants</li>
                        <li>Search restaurants</li>
                    </ul>
                    </Container>
                </h2>
            </div>
        );
    }
}

export default RestaurantDetail;