import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonContext } from './CommonContext';

function Logout() {
    localStorage.clear();

    let navigate = useNavigate();
    

    return (
        <div>
            <br /><br /><br />
            <h1>Logging out please wait...</h1>

            <CommonContext.Consumer>
                {
                    ({ updateLoginStatus }) => {
                        updateLoginStatus(false);
                        navigate('/login')
                    }

                }
            </CommonContext.Consumer>
        </div>
    );

}

export default Logout;