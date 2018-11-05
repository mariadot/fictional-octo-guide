import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionPoll from './QuestionPoll';
import QuestionResults from './QuestionResults';

class QuestionView extends Component {
    render() {
        const { users, authUser, questionId  } = this.props;
        const currentUser = users[authUser];

        if (currentUser.answers[questionId]){
            return <QuestionResults id={questionId} />
        } else {
            return <QuestionPoll id={questionId} />
        }
    }
}

function mapStateToProps({users, authUser}, props){
    const { id } = props.match.params;
    return {
        users,
        authUser,
        questionId: id
    }
}

export default withRouter(connect(mapStateToProps)(QuestionView));
