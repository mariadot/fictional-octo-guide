import * as API from './../../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

import { getQuestions} from './actionCreators';

export function handleGetQuestions(){
    return (dispatch) => {
        dispatch(showLoading());
        return API._getQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions));
                dispatch(hideLoading());
            })
            .catch(()=>(
                console.log('There was an error')
            ))
    }
}
