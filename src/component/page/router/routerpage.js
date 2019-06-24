import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../home/home'
import LoginPage from '../login/login'
import SiginPage from '../sigin/sigin'
import DetailPage from '../detail/detail'

class routerpage extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sigin" component={SiginPage} />
                <Route path="/detail" component={DetailPage} />
            </div>
        );
    }
}

export default routerpage;