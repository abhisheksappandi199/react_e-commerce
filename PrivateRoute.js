import React, { Component }  from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

// isAuthenticated = () => {
//     return ( localStorage.getItem('authToken') ? true : false )
// }

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            localStorage.getItem('authToken') ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute