import { GET_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions/actionTypes';

export function questions(state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state;
    }
}

export function saveQuestionAnswer(state = {}, action) {
    switch(action.type){
        case SAVE_QUESTION_ANSWER:
            const { authedUser, question, answer } = action;
            return {
                ...state,
                newObject:{authedUser, question, answer}
            }
        default:
            return state;
    }
}
