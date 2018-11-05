import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionResults extends Component {
    render(){
        const { userAnswer, question, author } = this.props;
        const optionOne = question.optionOne ? question.optionOne.text : '';
        const optionTwo = question.optionTwo ? question.optionTwo.text : '';
        const allVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const optionOneVotes = ( question.optionOne.votes.length / allVotes) * 100;
        const optionTwoVotes = (question.optionTwo.votes.length / allVotes) * 100;
        

        return (
            <div className='new-question ui three column stackable center aligned grid'>
                <div className='column'>
                    <div className="ui cards">
                        <div className="card">
                            <div className="content">
                                <div className="header">
                                    <img className='ui avatar tiny circular image' alt='user avatar' src='https://lorempixel.com/output/cats-q-c-200-200-9.jpg' />
                                    <span>Asked by {author}</span>
                                </div>
                            </div>
                            <div className="content">
                            <h2>Results: {userAnswer}</h2>
                                <div className='ui segment'>
                                    { userAnswer == 'optionOne' &&
                                        <div className="ui olive right corner label">
                                            <i className='check icon'></i>
                                        </div>
                                    }
                                    <div>{optionOne}?</div>
                                    <div className="ui small progress">
                                        <div className="bar"  style={{width: optionOneVotes+'%'}}>
                                            <div className="progress">{optionOneVotes}%</div>
                                        </div>
                                        
                                    </div>
                                    <span>{question.optionOne.votes.length} out of {allVotes} votes</span>
                                </div>
                                <div className='ui segment'>
                                    { userAnswer == 'optionTwo' &&
                                        <div className="ui olive right corner label">
                                            <i className='check icon'></i>
                                        </div>
                                    }
                                    <div className="label">{optionTwo}?</div>
                                    <div className="ui small progress" >
                                        <div className="bar" style={{width: optionTwoVotes+'%'}}>
                                            <div className="progress">{optionTwoVotes}%</div>
                                        </div>
                                    </div>
                                    <span>{question.optionTwo.votes.length} out of {allVotes} votes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, props){
    const { id } = props;
    const currentQuestion = questions[id];
    const questionAuthor = currentQuestion ? currentQuestion.author : '';
    const author = users[questionAuthor] ? users[questionAuthor].name : '';
    const userAnswer = users[questionAuthor].answers[id];

    return {
        author: author,
        question: currentQuestion ? currentQuestion : {},
        userAnswer: userAnswer,
    }
}


export default connect(mapStateToProps)(QuestionResults);
