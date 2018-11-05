import { 
    GET_USERS,
    AUTHED_USER, 
    SAVE_USER_ANSWER, 
    SAVE_USER_NEW_QUESTION } from '../actions/users/actionTypes';

export function users(state = {}, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
            const user = action.userAnswer.authedUser;
            const qid = action.userAnswer.qid;
            const answer = action.userAnswer.answer;

            return {
                ...state,
                [user]: {
                    ...state[user],
                    answers:{
                        ...state[user].answers,
                        [qid]: answer
                    }
                }
            }
        case SAVE_USER_NEW_QUESTION:
        const {author, id} = action.userQuestion;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            };
        default:
            return state;
    }
}

export function authUser (state = '', action) {
    switch(action.type) {
        case AUTHED_USER: 
            return action.id;
        default:
            return state;
    }
}
