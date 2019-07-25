import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Img from '../components/logoImage';
import logo from '../../public/images/logo.svg'

class demoComponent extends Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <Img 
                        src={logo}
                        className="app-logo"
                        alt="logo"
                    />
                    <a
                        className="app-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}

export default withRouter(connect(mapStateToProps)(demoComponent))