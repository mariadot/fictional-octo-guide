import React from 'react';
import Question from './Question';

const QuestionsList = ({questions}) => {
    if(!questions.length > 0){
        return 'No questions available';
    }

    const sortedQuestions = questions.sort((a,b) => (b.timestamp - a.timestamp));

    return(
        <div>
            <div className='ui basic segment'>
                <ul>
                { Object.keys(sortedQuestions).map((question) => (
                    <li key={questions[question].id} className='row'>
                        <Question question={questions[question]} />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default QuestionsList;