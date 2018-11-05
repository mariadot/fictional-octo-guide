import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import QuestionPoll from './QuestionPoll';
import QuestionResults from './QuestionResults';

class QuestionView extends Component {
    render() {
        const { users, authUser, questions, questionId  } = this.props;
        const currentUser = users[authUser];

        if (!questions[questionId]){
            return <Redirect to='/404' />
        }

        if (currentUser.answers[questionId]){
            return <QuestionResults id={questionId} />
        } else {
            return <QuestionPoll id={questionId} />
        }
    }
}

function mapStateToProps({users, authUser, questions}, props){
    const { id } = props.match.params;
    return {
        users,
        authUser,
        questions,
        questionId: id
    }
}

export default withRouter(connect(mapStateToProps)(QuestionView));
