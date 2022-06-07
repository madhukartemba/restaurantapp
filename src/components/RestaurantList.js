import { Button, Container } from 'react-bootstrap';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonContext } from './CommonContext';

class RestaurantList extends Component {

    constructor() {
        super();
        this.state = {
            list: null,
            statusMsg: "Loading please wait...",
            status: null,
            input: ""
        }
    }


    componentDidMount() {
        fetch("http://localhost:4000/restaurants").then((result) => {
            result.json().then((resp) => {
                this.setState({ list: resp });
            })
        }).catch((e) => {
            this.setState({
                statusMsg: `Unable to fetch data!`,
                status: e.toString()
            })
        }
        );
    }

    searchData(input) {
        this.setState({ status: null });
        fetch("http://localhost:4000/restaurants?q=" + input).then((result) => {
            result.json().then((resp) => {
                this.setState({ list: resp });
            })
        }).catch((e) => {
            this.setState({
                statusMsg: `Unable to fetch data!`,
                status: e.toString()
            })
        }
        );
    }


    render() {

        return (
            <CommonContext.Consumer>
                {
                    ({ loginStatus }) => (

                        <div>
                            <br /><br />
                            <h1>Restaurant List</h1>
                            <br />
                            {
                                loginStatus ? <div>
                                    <Container>
                                        <input style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='search' placeholder="Search" onChange={(e) => this.searchData(e.target.value)}></input>
                                        <br />

                                        <br />
                                        {
                                            this.state.list ?
                                                <div >
                                                    <Table striped variant='dark'>
                                                        <tbody>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Address</th>
                                                                <th>Email</th>
                                                                <th>Rating</th>
                                                                <th>Actions</th>
                                                            </tr>

                                                            {
                                                                this.state.list.map((item, index) =>
                                                                    <tr key={index}>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.address}</td>
                                                                        <td>{item.email}</td>
                                                                        <td>{item.rating}</td>
                                                                        <td>
                                                                            <Link style={{ marginRight: "10px", padding: "10%" }} to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                                                            <Link style={{ marginLeft: "10px", padding: "10%" }} to={"/delete/" + item.id}><FontAwesomeIcon icon={faTrash} color={"red"} /></Link>
                                                                        </td>

                                                                    </tr>

                                                                )
                                                            }


                                                        </tbody>
                                                    </Table>
                                                </div> : <div></div>
                                        }

                                        {
                                            this.state.status ? <div>
                                                <h1>{this.state.statusMsg}</h1>
                                                <br />
                                                {this.state.status}
                                            </div> : <div><br /><br /><br /></div>
                                        }
                                    </Container>
                                </div> : <div>
                                    <h1><br /><FontAwesomeIcon icon={faXmarkCircle} />  Bad Request <br /><br /> Please <Link to={'/login'}>login</Link> first.</h1>
                                    <br />

                                </div>
                            }
                        </div>



                    )
                }
            </CommonContext.Consumer>

        );
    }
}

export default RestaurantList;