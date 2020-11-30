import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './nav/Nav.js'
import Contents from './contents/Contents.js'


const LandingPage = props => {
    return(
        <div>
            {console.log(props)}
            <Route path="/" component={Nav}/>
            <Switch>
                <Route path="/" component={Contents} />
            </Switch>

        </div>
    )
}

export default LandingPage;