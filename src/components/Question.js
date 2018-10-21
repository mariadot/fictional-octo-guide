import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render(){
        const { question, author } = this.props;

        return (
            <div>
                <div className='question ui three column stackable center aligned grid'>
                    <div className='column'>
                    <div className="ui cards">
                        <div className="card">
                            <div className="content">
                                <header className="header">
                                    <h2>{author} asks...</h2>
                                </header>
                            </div>
                            <div className="content">
                                <img className='ui image circular tiny left floated' alt='user avatar' src='https://lorempixel.com/output/cats-q-c-400-400-9.jpg' />  
                                    <h3>Would you rather...?</h3>
                                    <p>...{ question.optionOne.text }...</p>
                            </div>
                            <div className="extra content">
                                <button className="ui basic green button">
                                    View poll
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, {questionId}){
    const currentQuestion = questions[questionId];
    const author = users[currentQuestion.author] ? users[currentQuestion.author].name : '';

    return {
        users,
        author,
        question: currentQuestion
    }
}

export default connect(mapStateToProps)(Question);
