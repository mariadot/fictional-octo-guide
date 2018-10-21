import React, { Component } from 'react';

class UserProfile extends Component {
    render(){
        const { user } = this.props;
        const name = user.name;
        const answers = Object.keys(user.answers).length;
        const questions = user.questions.length;

        return(
            <div className='ui card'>
                <div className='content'>
                    
                    <div className='header'>
                        <img className='ui image circular tiny left floated' alt='user avatar' src='https://lorempixel.com/output/cats-q-c-400-400-9.jpg' />  
                        <h2>{name}</h2>
                        <p>Score: {answers+questions}</p>
                    </div>
                </div>
                <div className='content'>
                    <span className='right floated'>
                        Questions: {questions}
                    </span>
                    <span>
                        Answers: {answers}
                    </span>
                </div>
            </div>
        )
    }
}

export default UserProfile;