import { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormButton, FormInput } from '../../pageComponents/formFields'
class TestpageForm extends Component {

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form className='firestore-add-test' onSubmit={handleSubmit}>
                    <Field className='test-add-label' type="firstname" title="First Name" name="firstname" component={FormInput} />
                    <Field className='test-button-add' onClick={this.addButton} type="submit" title="Adding Test" name="test add" component={FormButton} />
                </form>
            </div>
        )
    }
}

TestpageForm = reduxForm({
    form: 'TestpageForm'
})(TestpageForm);

export default TestpageForm