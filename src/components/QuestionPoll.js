import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleGetQuestions as getQuestions } from '../actions/questions';

class QuestionPoll extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getQuestions());
    }

    render(){
        const { question, author } = this.props;
        const optionOne = question.optionOne ? question.optionOne.text : '';
        const optionTwo = question.optionTwo ? question.optionTwo.text : '';

        if(!question) {
            return (<div>Loading</div>)
        }

        return (
            <div className='new-question ui three column stackable center aligned grid'>
                <div className='column'>
                    <div className="ui cards">
                        <div className="card">
                            <div className="content">
                                <div className="header">
                                    <img className='ui avatar image' alt='user avatar' src='https://lorempixel.com/output/cats-q-c-200-200-9.jpg' />
                                    <span>{author} asks</span>
                                </div>
                            </div>
                            <div className="content">
                                    <h2>Would you rather...?</h2>
                                    <div className='field'>
                                        <div className="ui radio checkbox">
                                            <input name="optionOne" type="radio" />
                                            <label>{optionOne}</label>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <div className="ui radio checkbox">
                                            <input name="optionTwo" type="radio" />
                                            <label>{optionTwo}</label>
                                        </div>
                                    </div>
                                </div>
                            <div className="extra content">
                                <button className="ui basic green button">
                                    Submit your answer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, props){
    const { id } = props.match.params;
    const currentQuestion = questions[id];
    const questionAuthor = currentQuestion ? currentQuestion.author : '';
    const author = users[questionAuthor] ? users[questionAuthor].name : '';

    return {
        author: author,
        question: currentQuestion ? currentQuestion : {}
    }
}


export default withRouter(connect(mapStateToProps)(QuestionPoll));
