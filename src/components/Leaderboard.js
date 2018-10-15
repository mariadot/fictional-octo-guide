import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

class Leaderboard extends Component {
    render(){
        const { users } = this.props;

        return(
            <div>
                <ul className='ui one column stackable center aligned grid'>
                    { Object.keys(users).map((id) => (
                            <li key={users[id].id} className='row'>
                                <UserProfile id={users[id].id}/>
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