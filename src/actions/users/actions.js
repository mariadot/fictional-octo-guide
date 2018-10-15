import * as API from './../../utils/_DATA';

import { getUsers } from './actionCreators';

export function handleGetUsers(){
    return (dispatch) => {
        return API._getUsers()
            .then((users) => {
                dispatch(getUsers(users));
            })
    }
}
