import React, { Component } from 'react';
import { connect } from  'react-redux';
import { handleGetUsers as getUsers } from '../actions/users'
import Leaderboard from './Leaderboard';

import '../App.css';

class App extends Component {
    componentDidMount(){
        this.props.dispatch(getUsers());
    }

    render() {
        console.log(this.props);
            return (
                <div className="App">
                    <Leaderboard />
                </div>
        );
    }
}

export default connect()(App);
