import React from 'react';
import { Route } from 'react-router-dom';
import Home from './src/home';
import Login from './src/login';
import List from './src/list';

export default () => {
    return (<div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/list" component={List}></Route>
    </div>)
}