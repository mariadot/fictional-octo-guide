import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

class Leaderboard extends Component {
    render(){
        const { users } = this.props;

        return(
            <div>
                <ul>
                { Object.keys(users).map((id) => (
                        <li key={users[id].id}>
                            <UserProfile />
                        </li>
                ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}){ // whyy!!??
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);