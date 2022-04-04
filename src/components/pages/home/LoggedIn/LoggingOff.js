import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";


import { FormButton } from "../../../../components/pageComponents/formFields";





class LoggingOff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        const { loggedIn } = this.state
        this.setState({
            loggedIn: false
        })
        console.log(loggedIn)
        return (loggedIn)

    }

    render() {
        return (
            <div>
                <form className="on-off">
                    <Field className="on-off-button" onClick={this.handleClick} type='button' title="off/on" name='Off/on' component={FormButton} />
                </form>
            </div >
        )
    }
}

LoggingOff = reduxForm({
    form: 'LoggingOff'
})(LoggingOff);

export default LoggingOff;
