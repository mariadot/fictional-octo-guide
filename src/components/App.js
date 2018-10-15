import React, { Component } from 'react';
import { connect } from  'react-redux';
import { handleGetUsers as getUsers } from '../actions/users'
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
                <div className="App">
                    <LoadingBar />
                    <Leaderboard />
                </div>
        );
    }
}

export default connect()(App);
