import * as API from './../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

import { getQuestions, saveQuestionVotes } from './actionCreators';

export function handleGetQuestions(){
    return (dispatch) => {
        dispatch(showLoading());
        return API._getQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions));
                dispatch(hideLoading());
            })
            .catch(()=>(
                console.log('There was an error')
            ))
    }
}

export function handleSaveQuestionAnswer(question, answer){
    return (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading());
        return API._saveQuestionAnswer({
            authedUser: authUser,
            qid: question,
            answer
        })
        .then(()=>{
            dispatch(saveQuestionVotes({
                    authedUser: authUser,
                    qid: question,
                    answer: answer
                }))
        })
        .catch(()=>{
            console.log('There was an error');
        })
    }
}
