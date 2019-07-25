import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApmRoute } from '@elastic/apm-rum-react';


import DemoContainer from '../container/demo'

class RouteComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ DemoContainer } />
                    {/* 
                        here goes the routes from the containers
                    */}
                </Switch>
            </BrowserRouter>
        )
    }
}

function mapStateToProps (state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(RouteComponent);