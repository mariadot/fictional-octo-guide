import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleGetQuestions as getQuestions } from '../actions/questions';

import QuestionsList from './QuestionsList';

class Dashboard extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getQuestions());
    }

    render(){
        const { questions, authUser, users } = this.props;
        const currentUser = users[authUser];
        const answeredQuestions = [];
        const unansweredQuestions = [];

        Object.keys(questions).forEach(questionId => {
            if(currentUser.answers[questionId]){
                answeredQuestions.push(questionId);
            } else {
                unansweredQuestions.push(questionId);
            }
        });

        return (
            <div>
                <QuestionsList questions={answeredQuestions} />
                <QuestionsList questions={unansweredQuestions} />
            </div>
        )
    }
}

function mapStateToProps({users, authUser, questions}){
    return {
        users,
        authUser,
        questions
    }
}

export default connect(mapStateToProps)(Dashboard);
