import { GET_USERS, AUTHED_USER } from '../actions/users/actionTypes';

export function users(state = {}, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}

export function authUser (state = {}, action) {
    switch(action.type) {
        case AUTHED_USER: 
            return action.id;
        default:
            return state;
    }
}
