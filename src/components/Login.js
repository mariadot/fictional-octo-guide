import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAuthUser } from '../actions/users';

class Login extends Component {
    state = {
        user:''
    }

    handleChange = (e) => {
    const user = e.target.value;

    this.setState(()=>({
            user
        }))
    }

    handleSubmit = (e) => {
        const { user } = this.state;
        const { dispatch } = this.props;

        dispatch(handleAuthUser(user));
        console.log(this.props);
    }

    render(){
        const { users } = this.props;
        return (
            <div className='ui two column center aligned grid'>
            <div className='row'>
                <div className='ui card'>
                        <div className='content'>
                            <div className='header'>
                                <h2>
                                    Welcome to the Would You Rather App!
                                </h2>
                                <p>
                                    Please select your user to continue
                                </p>
                            </div>
                        </div>
                        
                            <div className='content'>
                                <div className='field'>
                                    <select className="ui dropdown fluid" onChange={this.handleChange} >
                                        { Object.keys(users).map((id) => (
                                            <option key={users[id].id} value={users[id].id}>{users[id].id}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='extra content'>
                                <button className="ui fluid secondary button" type='submit' onClick={this.handleSubmit}>
                                    Sign In
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);
