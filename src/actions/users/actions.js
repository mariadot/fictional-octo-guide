import * as API from './../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

import { getUsers, authUser } from './actionCreators';

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

export function handleAuthUser(user){
    return(dispatch) => {
        dispatch(showLoading());
        dispatch(authUser(user));
        dispatch(hideLoading());
    }
}
