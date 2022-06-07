import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { CommonContext } from './CommonContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

class RestaurantCreate extends Component {



    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            rating: "",
            address: ""
        }
    }

    uploadData(event) {

        event.preventDefault();

        fetch("http://localhost:4000/restaurants", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                address: this.state.address,
                rating: this.state.rating,
                email: this.state.email
            })
        }).then((result) => {
            result.json().then((resp) => {
                alert("Successfully created: " + JSON.stringify(resp))

            })
        }).catch((e) => {
            alert(e);
        })

    }

    render() {
        return (
            <div>
                <br /><br />
                <h1>Create a Restaurant</h1>
                <br />
                <CommonContext.Consumer>
                    {
                        ({ loginStatus }) => (

                            <div>
                                {
                                    loginStatus ? <div>
                                        <form onSubmit={(event) => this.uploadData(event)}>
                                            <div style={{ fontSize: "150%" }}>
                                                <label htmlFor='name'>Name </label>
                                                <br />
                                                <input style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='name' required onChange={(e) => this.setState({ name: e.target.value })}></input>

                                                <br /><br />
                                                <label htmlFor='address'>Address</label>
                                                <br />
                                                <textarea style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='address' required onChange={(e) => { this.setState({ address: e.target.value }) }}></textarea>
                                                <br /><br />

                                                <label htmlFor='rating'>Rating</label>
                                                <br />
                                                <input style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='rating' required onChange={(e) => { this.setState({ rating: e.target.value }) }}></input>
                                                <br /><br />
                                                <label htmlFor='email'>Email</label>
                                                <br />
                                                <input style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='email' required onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                                                <br /><br />
                                            </div>
                                            <Button type='submit'>Create Restaurant</Button>
                                            <br /><br /><br />
                                        </form>
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
}

export default RestaurantCreate;