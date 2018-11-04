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

export function handleSaveUserAnswer(answer, option){
    return(dispatch) => {
        dispatch(saveUserAnswer(answer, option))
    }
}
