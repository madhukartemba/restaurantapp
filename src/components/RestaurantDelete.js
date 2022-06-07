import { Button } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CommonContext } from './CommonContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

function RestaurantDelete() {

    function getData(id) {
        fetch("http://localhost:4000/restaurants/" + id).then((result) => {
            if (!result.ok) {
                const err = new Error(result.status);
                throw err;
            }

            result.json().then((resp) => {

                setName(resp.name);
                setEmail(resp.email);
                setRating(resp.rating);
                setAddress(resp.address);

            })

        }).catch(
            (error) => {
                setStatus(error.toString());
            }
        )
    }

    function deleteData() {
        fetch("http://localhost:4000/restaurants/" + id, {
            method: 'DELETE'
        }).then((result) => {
            if (!result.ok) {
                throw new Error("There was a problem during deletion! " + result.status);
            }
            alert("Successfully deleted!");


        }).catch((e) => {
            setStatus(e.toString());
        })

    }

    let [name, setName] = useState("Loading...");
    let [email, setEmail] = useState("Loading...");
    let [rating, setRating] = useState("Loading...");
    let [address, setAddress] = useState("Loading...");
    let [status, setStatus] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        getData(id)
    }, []);


    return (
        <div>
            <br /><br />
            <h1>Delete Restaurant with ID: {id}</h1>
            <br />

            <CommonContext.Consumer>
                {
                    ({ loginStatus }) => (

                        <div>
                            {
                                loginStatus ? <div>

                                    {
                                        !status ? <div>
                                            <Table variant='dark' striped>
                                                <tbody>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>Email</th>
                                                        <th>Rating</th>
                                                    </tr>

                                                    <tr>
                                                        <td>{name}</td>
                                                        <td>{address}</td>
                                                        <td>{email}</td>
                                                        <td>{rating}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <br />
                                            <h1>Are you sure you want to delete this restaurant ?</h1>
                                            <br />
                                            <Button style={{ borderColor: "red", backgroundColor: "red" }} onClick={deleteData}>Yes, I am sure</Button>
                                            <Button style={{ marginLeft: "30%", borderColor: "green", backgroundColor: "green" }} as={Link} to="/list">Go back</Button>
                                            <br /><br /><br />
                                        </div> : <div><br /><br /><br /><br /><h1>An error occurred!</h1><br />{status}</div>

                                    }

                                </div> : <div>
                                    <h1><br /><FontAwesomeIcon icon={faXmarkCircle} />  Bad Request <br /><br /> Please <Link to={'/login'}>login</Link> first.</h1>
                                    <br />

                                </div>
                            }
                        </div>



                    )
                }
            </CommonContext.Consumer>



        </div>
    );
}

export default RestaurantDelete;