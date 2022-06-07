import { faUserAstronaut, faUserCheck, faUserCircle, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CommonContext } from './CommonContext';

function Login() {

    let [name, setName] = useState("");
    let [pass, setPass] = useState("");
    let navigate = useNavigate();
    let loginStatus = "";

    function attemptLogin(event) {
        event.preventDefault();



        fetch("http://localhost:4000/users?q=" + name).then((result) => {
            if (!result.ok) {
                throw new Error("Login Error: " + result.status);
            }

            result.json().then((resp) => {

                if (resp.length == 1) {
                    if (resp[0].name == name && resp[0].pass == pass) {
                        loginStatus(true);
                        navigate("/");
                    }
                    else {
                        alert("Incorrect Username or Password!")
                    }

                }
                else {
                    alert("Incorrect Login Details!");
                }
            })

        }).catch((err)=>{
            alert(err);
        })
    }

    return (
        <div>
            <br /><br />
            <h1><FontAwesomeIcon icon={faUserAstronaut} />  Login</h1>
            <br /><br /><br />

            <CommonContext.Consumer>
                {
                    ({ updateLoginStatus }) => {
                        loginStatus = updateLoginStatus;
                    }

                }
            </CommonContext.Consumer>

            <form onSubmit={(event) => attemptLogin(event)}>
                <label htmlFor="name"><b>Username</b></label>
                <br /><br />
                <input required style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='name' onChange={(e) => setName(e.target.value)}></input>
                <br /><br /><br />

                <label htmlFor="pass"><b>Password</b></label>
                <br /><br />
                <input required style={{ textAlign: "center", padding: "10px", width: "50%", borderRadius: "20px" }} id='pass' type="password" onChange={(e) => setPass(e.target.value)}></input>
                <br /><br /><br />
                <Button type="submit">Login</Button>
                <br /><br /><br />

            </form>
        </div>
    );
}

export default Login;