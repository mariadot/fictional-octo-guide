import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

const Leaderboard = (props) => {
    const { users } = props;

    const ordered = Object.keys(users).map(id => users[id])
        .sort((userA, userB) => (
            (Object.keys(userB.answers).length + userB.questions.length) -
            (Object.keys(userA.answers).length + userA.questions.length)
        ));

    return(
        <div className='container'>
            <ul className='ui one column stackable center aligned grid'>
                { Object.keys(ordered).map((id) => (
                        <li key={ordered[id].id} className='row'>
                            <UserProfile user={ordered[id]}/>
                        </li>
                ))}
            </ul>
        </div>
    )

}

function mapStateToProps({users}){
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);