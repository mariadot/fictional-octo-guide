import React, { Component } from 'react';

class QuestionResults extends Component {
    render(){
        return (
            <div className='new-question ui three column stackable center aligned grid'>
                <div className='column'>
                    <div class="ui cards">
                        <div class="card">
                            <div class="content">
                                <div class="header">
                                    <img class='ui avatar tiny circular image' alt='user avatar' src='https://lorempixel.com/output/cats-q-c-200-200-9.jpg' />
                                    <span>Asked by User</span>
                                </div>
                            </div>
                            <div class="content">
                            <h2>Results:</h2>
                                <div className='ui basic segment'>
                                    <div>Would you rather fly?</div>
                                    <div class="ui small progress">
                                        <div class="bar">
                                            <div class="progress"></div>
                                        </div>
                                        
                                    </div>
                                    <span>1 out of 2 votes</span>
                                </div>
                                <div className='ui olive segment'>
                                <a href='#' class="ui olive right corner label">
                                    <i className='check icon'></i>
                                </a>
                                    <div class="label">Would you rather be invisible?</div>
                                    <div class="ui small progress" >
                                        <div class="bar" style={{width: '50%'}}>
                                            <div class="progress">50%</div>
                                        </div>
                                    </div>
                                    <span>1 out of 2 votes</span>
                                </div>
                            </div>
                            <div class="extra content">
                                <button class="ui basic green button">
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

export default QuestionResults;
