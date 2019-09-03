import React from 'react';
import ReactDom from 'react-dom';
import Home from '../src/home';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from '../Routes';

const App = () => {
    return (<div>
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/list">List</Link>
                <br />
                <Link to="/login">Login</Link>
            </div>
            <Routes />
        </BrowserRouter>
    </div>)
}

ReactDom.hydrate(<App />, document.getElementById('root'));