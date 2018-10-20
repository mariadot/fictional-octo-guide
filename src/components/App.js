import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from  'react-redux';
import { handleGetUsers as getUsers } from '../actions/users';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import QuestionPoll from './QuestionPoll';
import QuestionResults from './QuestionResults';
import Question from './Question';
import Login from './Login';
import LoadingBar from 'react-redux-loading';

import '../App.css';

class App extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getUsers());
    }

    render() {
        const { authUser } = this.props;
        console.log(this.props);
            return (
                <Router>
                    <Fragment>
                        <div className='ui container'>
                            <LoadingBar />
                            <Nav />
                            <Route path='/' exact component={ authUser.length > 0 ? Question : Login } />
                            <Route path='/leaderboard' component={Leaderboard} />
                            <Route path='/new-question' component={NewQuestion} />
                    </div>
                    </Fragment>
                </Router>
        );
    }
}

function mapStateToProps({authUser, users}){
    return {
        authUser,
        users
    }
}

export default connect(mapStateToProps)(App);
