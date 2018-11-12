import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import QuestionsList from './QuestionsList';

import 'react-tabs/style/react-tabs.css';

const Dashboard = (props) => {
    const { questions, authUser, users } = props;
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
        <div className='container'>
            <div className='ui stackable center aligned grid'>
                <Tabs defaultIndex={1}>
                    <TabList>
                        <Tab>Answered Questions</Tab>
                        <Tab>Unaswered Questions</Tab>
                    </TabList>

                    <TabPanel>
                        <QuestionsList questions={answeredQuestions} />
                    </TabPanel>
                    <TabPanel>
                        <QuestionsList questions={unansweredQuestions} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

function mapStateToProps({users, authUser, questions}){
    return {
        users,
        authUser,
        questions
    }
}

export default connect(mapStateToProps)(Dashboard);
