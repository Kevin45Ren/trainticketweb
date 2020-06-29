import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Register from './Register';
import Forget from './Forget'


const BasicRoute = () => (
    <HashRouter>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/Register" component={Register}/>
    <Route exact path="/Forget" component={Forget}/>
</Switch>
</HashRouter>
);


export default BasicRoute;