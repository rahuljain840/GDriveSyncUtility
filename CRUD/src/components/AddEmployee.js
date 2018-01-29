import {Form,Field, reduxForm} from "redux-form";
import React, { Component } from 'react';
import styles from '../../style/style.less';

function validate(values) {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    }
    return errors
}

const customStyles = {
    content: {
        bottom: '165px',
        left: '90px',
        right: '90px',
        background: '#31b0d5',
        width: '500px'
    }
};
class AddEmployee extends Component {

    renderField = ({input, label, type, value, meta: {touched, error}}) =>(
            <div>
                <div className={styles.hello} style={{textAlign: 'center'}} >
                    <label>{label}</label>
                </div>
                <div className="col-md-6" style={{textAlign: 'center'}}>
                    <input {...input} type={type}  placeholder={label} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        )

    render() {
        console.log(".........");
        const {handleSubmit, pristine, submitting, employee} = this.props;
        return (
            <Form onSubmit={handleSubmit(this.props.onSubmit)}>
                <div className="col-md-12" style={{padding: '10px'}}>
                    <Field name="name" component={this.renderField} type="text" label="Name"/>
                </div>
                <div className= "col-md-12" style={{padding: '10px'}}>
                    <Field name="email" component={this.renderField} type="email" label="Email"/>
                </div>
                <div className="col-md-12" style={{padding: '10px'}}>
                    <Field name="employeeID" component={this.renderField} type="text" label="EmployeeID"/>
                </div>
                <div className="col-md-12" style={{padding: '10px'}}>
                    <Field name="department" component={this.renderField} type="text" label="Department"/>
                </div>
                <div className="col-md-12" style={{textAlign: 'center',padding: '10px'}}>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                </div>
            </Form>
        );
    }
}

// Decorate the form component
AddEmployee = reduxForm({
    form: 'AddEmployee', // a unique name for this form
    validate,
    asyncBlurFields: []
})(AddEmployee);

export default AddEmployee;