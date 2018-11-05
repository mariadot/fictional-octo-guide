import React from 'react';
import Question from './Question';

const QuestionsList = ({questions}) => {
    if(!questions.length > 0){
        return 'No questions available';
    }

    const sortedQuestions = questions.sort((a,b) => (b.timestamp - a.timestamp));

    return(
        <div>
            <h2>I'm a list</h2>
            <div className='ui basic segment'>
                { Object.keys(sortedQuestions).map((question) => (
                    <li key={questions[question].id} className='row'>
                        <Question question={questions[question]} />
                    </li>
                ))}
            </div>
        </div>
    )
}

export default QuestionsList;