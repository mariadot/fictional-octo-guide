import React, { Component } from 'react';

class UserProfile extends Component {
    render(){
        const { user } = this.props;
        const { name, avatarURL } = user;
        const answers = Object.keys(user.answers).length;
        const questions = user.questions.length;

        return(
            <div className='ui card'>
                <div className='content'>
                    <div className='header'>
                        <img className='ui image circular tiny left floated' alt={`${name} avatar`} src={avatarURL} />  
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