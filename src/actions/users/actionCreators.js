import { GET_USERS, AUTHED_USER } from './actionTypes';

export function getUsers(users){
    return {
        type: GET_USERS,
        users,
    }
}

export function authUser(id){
    return {
        type: AUTHED_USER,
        id
    }
}
