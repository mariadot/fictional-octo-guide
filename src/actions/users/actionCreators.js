import { GET_USERS,
    AUTHED_USER,
    SAVE_USER_ANSWER,
    SAVE_USER_NEW_QUESTION } from './actionTypes';

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

export function saveUserNewQuestion(userQuestion){
    return {
        type: SAVE_USER_NEW_QUESTION,
        userQuestion
    }
}
