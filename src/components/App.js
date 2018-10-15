import React, { Component } from 'react';
import { connect } from  'react-redux';
import { handleGetUsers as getUsers } from '../actions/users';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import LoadingBar from 'react-redux-loading';

import '../App.css';

class App extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getUsers());
    }

    render() {
            return (
                <div className='ui container'>
                    <LoadingBar />
                    <Nav/>
                    <Leaderboard />
                </div>
        );
    }
}

export default connect()(App);
