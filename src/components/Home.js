import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <h1>Home</h1>
                <br /><br /><br /><br /><br /><br />

                <h2>
                    Restaurant Manager<br /><br />
                    The all in one restaurant management tool!<br />
                    Start managing your restaurants now! <FontAwesomeIcon icon={faSmileBeam} />

                </h2>
                
            </div>
        );
    }
}

export default Home;