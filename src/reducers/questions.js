import { GET_QUESTIONS, SAVE_QUESTION_VOTES, SAVE_NEW_QUESTION } from '../actions/questions/actionTypes';

export function questions(state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_VOTES:
            const answer = action.questionAnswer.answer;
            const qid = action.questionAnswer.qid;
            const user = action.questionAnswer.authedUser;
            return {
                ...state,
                [qid]: { 
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([user])
                    }
                }
            }
        case SAVE_NEW_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state;
    }
}

