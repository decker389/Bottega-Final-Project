import React, { Component } from 'react';
import firebase from "firebase";
import { connect } from 'react-redux';


import TestpageForm from './testpageForm';
import TestpageRead from './testpageRead';
import PageTitle from '../../pageComponents/pageTitle';
import { db } from '../../reducers/initFirebase';
import * as actions from '../../reducers';

class TestPage extends Component {
    onSubmit = (fields) => {
        try {
            db.collection("users").doc("test").set({
                fields,
                FirstName: "test first name",
                LastName: "test Last Name",
                email: "test@email.com",
                password: "password"
            })
            console.log('added test user correctly');
        }
        catch (error) {
            console.log("error writting document: ", error);
        }
    }
    render() {

        function TestPage() {
            const firebaseApp = firebase.apps[0];
            return (
                <div>
                    <h1>React & Firebase</h1>
                    <code>
                        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
                    </code>
                </div>
            );
        }


        return (
            <div className='page-container'>
                <PageTitle title='Test Page' />

                <div className='firebase-information'>
                    {TestPage()}
                </div>
                <div className='firebase-user-add-form-test'>
                    <TestpageForm onSubmit={this.onSubmit} />
                </div>
                <div className='firebase-product-read-test'>
                    <TestpageRead />
                </div>
            </div>
        )
    }
}

TestPage = connect(null, actions)(TestPage)
export default TestPage;