import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveNewQuestion } from '../actions/questions';

class NewQuestion extends Component {
    state = {
        option1: '',
        option2: '',
        questionAdded: false
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmitAnswer = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { option1, option2 } = this.state;
        dispatch(handleSaveNewQuestion(option1, option2));
        this.setState({
            questionAdded: true
        })
    }

    render(){
        if(this.state.questionAdded === true){
            return <Redirect to='/' />
        }

        return (
            <div className='new-question ui three column stackable center aligned grid'>
                <div className='column'>
                    <h1 className="ui top attached header">
                        Add a New Question
                    </h1>
                    <div className="ui attached segment">
                        <h2>Complete the question</h2>
                        <h3>Would you rather...?</h3>
                        <form onSubmit={this.onSubmitAnswer} className='form stacked'>
                            <div className='field'>
                                <label htmlFor='option1'>Option one</label>
                                <div className="ui fluid input">
                                    <input onChange={this.handleChange} placeholder="Input first option" type="text" name='option1'/>
                                </div>
                            </div>
                            <div className='ui horizontal divider'>or</div>
                            <div className='field'>
                                <label htmlFor='option2'>Option two</label>
                                <div className="ui fluid input">
                                    <input onChange={this.handleChange} placeholder="Input second option" type="text" name='option2'/>
                                </div>
                            </div>
                            <button className="ui secondary button">
                                Add Question
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion);
