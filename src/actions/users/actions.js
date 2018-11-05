import * as API from './../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

import { getUsers, authUser, saveUserAnswer } from './actionCreators';

export function handleGetUsers(){
    return (dispatch) => {
        dispatch(showLoading());
        return API._getUsers()
            .then((users) => {
                dispatch(getUsers(users));
                dispatch(hideLoading());
            })
            .catch(()=>(
                console.log('There was an error')
            ))
    }
}

export function handleAuthUser(id){
    return(dispatch) => {
        dispatch(authUser(id));
    }
}

export function handleSaveUserAnswer(question, option){
    return(dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading());
        dispatch(saveUserAnswer({
            authedUser: authUser,
            qid: question,
            answer: option
        }))
        dispatch(hideLoading());
    }
}
