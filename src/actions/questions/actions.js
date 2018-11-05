import * as API from './../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

import { 
    getQuestions,
    saveQuestionVotes,
    saveNewQuestion } from './actionCreators';

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
            dispatch(hideLoading());
        })
        .catch(()=>{
            console.log('There was an error');
        })
    }
}


export function handleSaveNewQuestion(option1, option2, author){
    return (dispatch) => {
        dispatch(showLoading());
        return API._saveQuestion({
            optionOneText: option1, 
            optionTwoText: option2, 
            author: author
        })
        .then(()=>{
            dispatch(saveNewQuestion({
                option1,
                option2,
                author
            }));
            dispatch(hideLoading());
        })
        .catch(()=>{
            console.log('There was an error');
        })
    }
}