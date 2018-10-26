import { combineReducers } from 'redux';

import { users, authUser } from './users';
import { questions, saveQuestionAnswer } from './questions';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authUser,
    users,
    questions,
    saveQuestionAnswer,
    loadingBar:loadingBarReducer,
});
