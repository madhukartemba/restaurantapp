import React, { Component, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonContext } from './CommonContext';




function RestaurantUpdate() {

    function getData(id) {
        fetch("http://localhost:4000/restaurants/" + id).then((result) => {
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

    function updateData(event) {
        event.preventDefault();

        let data = { name, email, address, rating };

        fetch("http://localhost:4000/restaurants/" + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(data)

        }).then((result) => {
            result.json().then((resp) => {
                alert("Successfully updated the data!");

            })
        }).catch((e) => {
            alert(e);
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
            <h1>Update Restaurant with ID: {id}</h1>
            <br />

            <CommonContext.Consumer>
                {
                    ({ loginStatus }) => (

                        <div>
                            {
                                loginStatus ? <div>
                                    {
                                        !status ?
                                            <div>
                                                <form onSubmit={(event) => updateData(event)}>
                                                    <div style={{ fontSize: "150%" }}>
                                                        <label htmlFor='name'>Name </label>
                                                        <br />
                                                        <h1></h1>
                                                        <input style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='name' value={name} onChange={(e) => { setName(e.target.value) }}></input>

                                                        <br /><br />
                                                        <label htmlFor='address'>Address</label>
                                                        <br />
                                                        <textarea style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='address' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                                                        <br /><br />

                                                        <label htmlFor='rating'>Rating</label>
                                                        <br />
                                                        <input style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='rating' value={rating} onChange={(e) => setRating(e.target.value)}></input>
                                                        <br /><br />
                                                        <label htmlFor='email'>Email</label>
                                                        <br />
                                                        <input style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                                        <br /><br />
                                                    </div>
                                                    <Button type='submit'>Update Restaurant</Button>
                                                    <Button style={{ marginLeft: "30%" }} as={Link} to="/list">Go back</Button>
                                                    <br /><br /><br />
                                                </form>
                                            </div> : <div><br /><br /><br /><br /><h1>Unable to fetch data!</h1><br />{status}</div>
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
    )

}

export default RestaurantUpdate;