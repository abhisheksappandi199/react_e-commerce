import React, { Component }  from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

// isAuthenticated = () =>{
//     return ( localStorage.getItem('authToken') ? true : false )
// }
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            localStorage.getItem('authToken') && restricted ?
                <Redirect to="/home" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;