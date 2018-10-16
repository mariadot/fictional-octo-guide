import React, { Component } from 'react';

class NewQuestion extends Component {
    render(){
        return (
            <div className='new-question ui three column stackable center aligned grid'>
                <div className='column'>
                    <h1 class="ui top attached header">
                        Add a New Question
                    </h1>
                    <div class="ui attached segment">
                        <h2>Complete the question</h2>
                        <h3>Would you rather...?</h3>
                        <form className='form stacked'>
                            <div className='field'>
                                <label for='option1'>Option one</label>
                                <div class="ui fluid input">
                                    <input placeholder="Input first option" type="text" name='option1'/>
                                </div>
                            </div>
                            <div className='ui horizontal divider'>or</div>
                            <div className='field'>
                                <label for='option2'>Option two</label>
                                <div class="ui fluid input">
                                    <input placeholder="Input second option" type="text" name='option2'/>
                                </div>
                            </div>
                            <button class="ui secondary button">
                                Add Question
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewQuestion;
