import { 
    GET_QUESTIONS, 
    SAVE_QUESTION_VOTES,
    SAVE_NEW_QUESTION } from './actionTypes';

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export function saveQuestionVotes(questionAnswer){
    return {
        type: SAVE_QUESTION_VOTES,
        questionAnswer
    }
}

export function saveNewQuestion(question){
    return {
        type: SAVE_NEW_QUESTION,
        question
    }
}
