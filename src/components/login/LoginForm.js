import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { bwmInput } from './../shared/form/bwm-input';
import { require, minLength4 } from '../shared/form/validators';
import { BwmResError } from './../shared/form/bwmResError';

const LoginForm = props => {
    const { handleSubmit, pristine, submitting, valid, loginUser, errors } = props
    return (
        <form onSubmit={handleSubmit(loginUser)} className="mb-5">
            <Field
                name="email"
                type="email"
                label="Email"
                className="form-control"
                component={bwmInput}
                validate={[require, minLength4]}
            />

            <Field
                name="password"
                type="password"            
                label="Mật khẩu"
                className="form-control"
                component={bwmInput}
                validate={[require]}
            />
            <button type="submit" className="btn btn-bwm btn-form w-100 bg-primary text-white" disabled={!valid || pristine || submitting}>
                Đăng nhập
            </button>
            <BwmResError errors={errors} />
        </form>
    )
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm)