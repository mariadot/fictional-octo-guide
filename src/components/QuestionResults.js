import React from 'react';
import { connect } from 'react-redux';

const QuestionResults = (props) => {
    const { userAnswer, question, author, authorAvatar } = props;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const allVotes =  optionOneVotes + optionTwoVotes;
    const optionOnePercentage = Math.round(( optionOneVotes / allVotes) * 100);
    const optionTwoPercentage = Math.round((optionTwoVotes / allVotes) * 100);

    return (
        <div className='new-question ui three column stackable center aligned grid'>
            <div className='column'>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                <img className='ui avatar tiny circular image' alt={`${author} avatar`} src={authorAvatar} />
                                <span>Asked by {author}</span>
                            </div>
                        </div>
                        <div className="content">
                        <h2>Results:</h2>
                        <h3>Would you rather...</h3>
                            <div className='ui segment'>
                                { userAnswer === 'optionOne' &&
                                    <div className="ui olive right corner label">
                                        <i className='check icon'></i>
                                    </div>
                                }
                                <div>{optionOne}</div>
                                <div className="ui small progress">
                                    <div className="bar"  style={{width: optionOnePercentage+'%'}}>
                                        <div className="progress">{optionOnePercentage}%</div>
                                    </div>
                                    
                                </div>
                                <span>{optionOneVotes} out of {allVotes} votes</span>
                            </div>
                            <div className='ui horizontal divider'>or</div>
                            <div className='ui segment'>
                                { userAnswer === 'optionTwo' &&
                                    <div className="ui olive right corner label">
                                        <i className='check icon'></i>
                                    </div>
                                }
                                <div className="label">{optionTwo}?</div>
                                <div className="ui small progress" >
                                    <div className="bar" style={{width: optionTwoPercentage+'%'}}>
                                        <div className="progress">{optionTwoPercentage}%</div>
                                    </div>
                                </div>
                                <span>{optionTwoVotes} out of {allVotes} votes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({authUser, users, questions}, props){
    const { id } = props;
    const currentQuestion = questions[id];
    const questionAuthor = currentQuestion.author;
    const author = users[questionAuthor].name;
    const authorAvatar = users[questionAuthor].avatarURL;
    const userAnswer = users[authUser].answers[id];

    return {
        author: author,
        question: currentQuestion,
        userAnswer: userAnswer,
        authorAvatar: authorAvatar
    }
}

export default connect(mapStateToProps)(QuestionResults);
