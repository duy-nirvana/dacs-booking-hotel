import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { bwmInput } from './../shared/form/bwm-input';
import { BwmResError } from './../shared/form/bwmResError';



const RegisterForm = props => {

    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>

                    <Field
                        name="username"
                        type="text"
                        label="Tên người dùng"
                        className="form-control"
                        component={bwmInput}
                    />
                    
                    <Field
                        name="email"
                        type="email"
                        label="Email"
                        className="form-control"
                        component={bwmInput}
                    />
                
                    <Field
                        name="password"
                        type="password"
                        label="Mật khẩu"
                        className="form-control"
                        component={bwmInput}
                    />
        
                    <Field
                        name="passwordConfirm"
                        type="password"
                        label="Xác nhận mật khẩu"
                        className="form-control"
                        component={bwmInput}
                    />
                <button className="btn btn-bwm btn-form w-100 bg-primary text-white" disabled={!valid || pristine || submitting} type="submit">
                    Đăng kí
                </button>
                <BwmResError errors={errors}/>
        </form>
    )
}

const validate = values => {
    const errors = {}
    
    if(values.username && values.username.length < 4){
        errors.username = 'Tên người dùng phải có ít nhất 4 kí tự!';
    }

    if(!values.email){
        errors.email = 'Email không được để trống!';
    }

    if(!values.passwordConfirm){
        errors.passwordConfirm = "Vui lòng xác nhận mật khẩu!";
    }

    if(values.password !== values.passwordConfirm){
        errors.password = 'Mật khẩu & mật khẩu xác nhận phải giống nhau!';
    }
    return errors
}

export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)