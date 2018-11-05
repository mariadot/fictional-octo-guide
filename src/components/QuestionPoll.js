import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetQuestions as getQuestions, handleSaveQuestionAnswer } from '../actions/questions';
import { handleSaveUserAnswer } from '../actions/users';

class QuestionPoll extends Component {
    state = {
        option: 'optionOne',
        pollAnswered: false
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getQuestions());
    }

    handleChange = (e) => {
        this.setState({
            option: e.target.value
        });
    } 

    onSubmitAnswer = (e) => {
        e.preventDefault();
        const { dispatch, question } = this.props;
        dispatch(handleSaveQuestionAnswer(question.id, this.state.option));
        dispatch(handleSaveUserAnswer(question.id, this.state.option));
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
                                <form onSubmit={this.onSubmitAnswer}>
                                    <div className='field'>
                                        <div className="ui radio checkbox">
                                            <input
                                                type="radio" 
                                                value="optionOne" 
                                                checked={this.state.option === 'optionOne'}
                                                onChange={this.handleChange}
                                            />
                                            <label>{optionOne}</label>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <div className="ui radio checkbox">
                                            <input
                                                type="radio" 
                                                value="optionTwo" 
                                                checked={this.state.option === 'optionTwo'}
                                                onChange={this.handleChange}
                                            />
                                            <label>{optionTwo}</label>
                                        </div>
                                    </div>
                                    <button type='submit 'className='ui basic green button'>
                                        Submit your answer
                                    </button>
                                </form>
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

    return {
        author: author,
        question: currentQuestion ? currentQuestion : {}
    }
}


export default connect(mapStateToProps)(QuestionPoll);
