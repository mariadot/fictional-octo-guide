import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from  'react-redux';
import { handleGetUsers as getUsers } from '../actions/users';
import { handleGetQuestions as getQuestions } from '../actions/questions';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import QuestionView from './QuestionView';
import Dashboard from './Dashboard';
import Login from './Login';
import NotFound from './NotFound';
import LoadingBar from 'react-redux-loading';

import '../App.css';

const PrivateRoute = ({component: Component, authUser, ...rest}) => {
    return (<Route {...rest} render={(props) => (
        authUser.length > 0 ? 
        <Component {...props} /> :
        <Login {...props} />
    )} />)
}

class App extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getUsers());
        dispatch(getQuestions());
    }

    render() {
        const { authUser } = this.props;
            return (
                <Router>
                    <div className='ui container'>
                        <LoadingBar />
                        <Nav />
                        <PrivateRoute path='/' exact component={Dashboard} authUser={authUser} />
                        <PrivateRoute path='/404' component={NotFound} authUser={authUser} />
                        <PrivateRoute path='/leaderboard' component={Leaderboard} authUser={authUser} />
                        <PrivateRoute path='/add' component={NewQuestion} authUser={authUser} />
                        <PrivateRoute path='/questions/:id' component={QuestionView} authUser={authUser} />
                    </div>
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
