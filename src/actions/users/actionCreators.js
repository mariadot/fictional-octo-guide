import { GET_USERS, AUTHED_USER, SAVE_USER_ANSWER } from './actionTypes';

export function authUser(id){
    return {
        type: AUTHED_USER,
        id
    }
}

export function getUsers(users){
    return {
        type: GET_USERS,
        users,
    }
}

export function saveUserAnswer(userAnswer){
    return {
        type: SAVE_USER_ANSWER,
        userAnswer
    }
}
