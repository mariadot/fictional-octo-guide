import React, { Component } from 'react';
import Question from './Question';

const QuestionsList = ({questions}) => {
    if(!questions.length > 0){
        return 'Loading';
    }

    return(
        <div>
            <h2>I'm a list</h2>
            <div className='ui basic segment'>
                { questions.map((id) => (
                    <li key={id} className='row'>
                        <Question questionId={id} />
                    </li>
                ))}
            </div>
        </div>
    )
}

export default QuestionsList;