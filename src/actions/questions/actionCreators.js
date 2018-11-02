import { GET_QUESTIONS, SAVE_QUESTION_ANSWER, SAVE_QUESTION_VOTES } from './actionTypes';

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export function saveQuestionAnswer(question, answer){
    return {
        type: SAVE_QUESTION_ANSWER,
        question,
        answer,
    }
}

export function saveQuestionVotes(question, answer){
    return {
        type: SAVE_QUESTION_VOTES,
        question,
        answer,
    }
}
