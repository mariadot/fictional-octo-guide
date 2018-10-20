import React, { Component } from 'react';

class Question extends Component {
    render(){
        return (
            <div>
                <div className='question ui three column stackable center aligned grid'>
                    <div className='column'>
                    <div className="ui cards">
                        <div className="card">
                            <div className="content">
                                <header className="header">
                                    <h2>User asks...</h2>
                                </header>
                            </div>
                            <div className="content">
                                <img className='ui image circular tiny left floated' src='https://lorempixel.com/output/cats-q-c-400-400-9.jpg' />  
                                    <h3>Would you rather...?</h3>
                                    <p>...be invisible...</p>
                            </div>
                            <div className="extra content">
                                <button className="ui basic green button">
                                    View poll
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;
