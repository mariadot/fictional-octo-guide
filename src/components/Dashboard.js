import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { handleGetQuestions as getQuestions } from '../actions/questions';
import QuestionsList from './QuestionsList';

import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getQuestions());
    }

    render(){
        const { questions, authUser, users } = this.props;
        const currentUser = users[authUser];
        const answeredQuestions = [];
        const unansweredQuestions = [];

        Object.keys(questions).forEach(questionId => {
            if(currentUser.answers[questionId]){
                answeredQuestions.push(questions[questionId]);
            } else {
                unansweredQuestions.push(questions[questionId]);
            }
        });

        return (
            <Tabs>
                <TabList>
                    <Tab>Unaswered Questions</Tab>
                    <Tab>Answered Questions</Tab>
                </TabList>

                <TabPanel>
                    <QuestionsList questions={unansweredQuestions} />
                </TabPanel>
                <TabPanel>
                    <QuestionsList questions={answeredQuestions} />
                </TabPanel>
                
            </Tabs>

        )
    }
}

function mapStateToProps({users, authUser, questions}){
    return {
        users,
        authUser,
        questions
    }
}

export default connect(mapStateToProps)(Dashboard);
