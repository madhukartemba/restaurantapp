import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome, faHomeAlt, faHomeLg, faHouse, faHouseLaptop, faInfoCircle, faList, faPlus, faSearch, faUser, faUserAstronaut, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'
import { } from '@fortawesome/free-regular-svg-icons'
import { CommonContext } from './CommonContext';

function NavBarMenu() {
    return (
        <div>
            <CommonContext.Consumer>
                {
                    ({loginStatus}) => (
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand style={{ marginLeft: "1%" }} as={Link} to="/">Restaurant Manager</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                                    <Nav.Link as={Link} to='/list'><FontAwesomeIcon icon={faList} /> List</Nav.Link>
                                    <Nav.Link as={Link} to='/create'><FontAwesomeIcon icon={faPlus} /> Create</Nav.Link>
                                    <Nav.Link as={Link} to='/detail'><FontAwesomeIcon icon={faInfoCircle} /> Details</Nav.Link>
                                    {
                                        !loginStatus ?
                                            <Nav.Link as={Link} to='/login'><FontAwesomeIcon icon={faUserAstronaut} /> Login</Nav.Link> :
                                            <Nav.Link as={Link} to='/logout'><FontAwesomeIcon icon={faUserLock} /> Logout</Nav.Link>

                                    }

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    )

                }
            </CommonContext.Consumer>

        </div>
    );
}

export default NavBarMenu;