import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from  'react-redux';
import { handleGetUsers as getUsers } from '../actions/users';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import QuestionPoll from './QuestionPoll';
import QuestionResults from './QuestionResults';
import Question from './Question';
import Dashboard from './Dashboard';
import Login from './Login';
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
    }

    render() {
        const { authUser } = this.props;
            return (
                <Router>
                    <Fragment>
                        <div className='ui container'>
                            <LoadingBar />
                            <Nav />
                            <Route path='/' exact component={ authUser.length > 0 ? Dashboard : Login } />
                            <PrivateRoute path='/leaderboard' component={Leaderboard} authUser={authUser} />
                            <PrivateRoute path='/add' component={NewQuestion} authUser={authUser} />
                            <PrivateRoute path='/questions/:id' component={QuestionPoll} authUser={authUser} />
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
