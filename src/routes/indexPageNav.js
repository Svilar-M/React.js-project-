import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from '../App.js';
import About from '../templates/about';
import Login from '../templates/login';
import NotFound from '../templates/NotFound';
import Profile from '../templates/profile';
import Clubs from '../templates/clubs';
import ClubDetails from '../templates/clubDetails';
import Rate from '../templates/rate';
import Home from '../templates/home';
import Register from '../templates/register';
import Carriers from '../templates/carriers';
import Contact from '../templates/contact';
import Privacy from '../templates/privacy';
import Terms from '../templates/terms';
const Routes = (props) => (
    <Router {...props}>
          <Route path='/' component={App} >
            <IndexRoute component={Home} />

            <Route path='login' component={Login}/>
            <Route path='register' component={Register}/>
            <Route path='profile' component={Profile}/>
            <Route path='clubs' component={Clubs}/>
            <Route path='clubDetails'>
                <IndexRoute component={ClubDetails} />
                <Route path=':name' component={ClubDetails} />
            </Route>
            <Route path='rate' component={Rate}/>
            <Route path='about' component={About}/>
            <Route path='carriers' component={Carriers}/>
            <Route path='contact' component={Contact}/>
            <Route path='privacy' component={Privacy}/>
            <Route path='terms' component={Terms}/>

            <Route path='**' component={NotFound}/>

          </Route>
    </Router>
);





export default Routes;
