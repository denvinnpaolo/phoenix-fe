import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import LandingPage from './components/landing';


const Private = ({ component: Component, ...rest}) => {
    const { token } = useSelector(state => state.users.userData);

    return(
        <Route
            {...rest}
            render = {props => token? <Component {...props} {...rest} /> : <LandingPage />}
         />
    )
}
export default Private;