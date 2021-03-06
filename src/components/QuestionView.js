import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionPoll from './QuestionPoll';
import QuestionResults from './QuestionResults';
import NotFound from './NotFound';

const QuestionView = (props) => {
    const { users, authUser, questionId, currentQuestion } = props;
    const currentUser = users[authUser];

    if (!currentQuestion){
        return <NotFound />
    }

    if (currentUser.answers[questionId]){
        return <QuestionResults id={questionId} />
    } else {
        return <QuestionPoll id={questionId} />
    }

}

function mapStateToProps({users, authUser, questions}, props){
    const { id } = props.match.params;
    const currentQuestion = questions[id];
    return {
        users,
        authUser,
        questionId: id,
        currentQuestion: currentQuestion
    }
}

export default withRouter(connect(mapStateToProps)(QuestionView));
