import React, { Component } from 'react';

class QuestionPoll extends Component {
    render(){
        return (
            <div className='new-question ui three column stackable center aligned grid'>
                <div className='column'>
                    <div class="ui cards">
                        <div class="card">
                            <div class="content">
                                <div class="header">
                                    <img class='ui avatar tiny circular image' alt='user avatar' src='https://lorempixel.com/output/cats-q-c-200-200-9.jpg' />
                                    <span>Username asks</span>
                                </div>
                            </div>
                            <div class="content">
                                    <h2>Would you rather...?</h2>
                                    <div className='field'>
                                        <div class="ui radio checkbox">
                                            <input name="radio" checked="checked" type="radio" />
                                            <label>Option 1</label>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <div class="ui radio checkbox">
                                            <input name="radio" type="radio" />
                                            <label>Option 2</label>
                                        </div>
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

export default QuestionPoll;
