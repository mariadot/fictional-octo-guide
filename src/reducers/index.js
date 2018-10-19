import { combineReducers } from 'redux';

import { users, authUser } from './users';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authUser,
    users,
    loadingBar:loadingBarReducer,
});
