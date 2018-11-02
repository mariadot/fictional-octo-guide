import { combineReducers } from 'redux';

import { users, authUser } from './users';
import { questions } from './questions';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authUser,
    users,
    questions,
    loadingBar:loadingBarReducer,
});
