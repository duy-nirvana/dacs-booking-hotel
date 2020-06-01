import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions';

import shiba1 from '../../styles/img/shiba1.png'


class Register extends Component {

    constructor() {
        super();

        this.state = {
            errors: [],
            redirect: false
        }

        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(userData){
        actions.register(userData).then(
            (registered) => {
                this.setState({redirect: true})
            },
            (errors) => {
                this.setState({errors:errors});
            }
        )
    }

    render() {
        const { errors, redirect } = this.state;

        if(redirect){
            return <Redirect to={{pathname: '/login', state: {successRegister: true}}} />
        }

        return (
            <section id="register">
                <div className="bwm-form">
                    <div className="row d-flex- align-items-center">
                        <div className="col-md-5">
                            <h1>Tạo tài khoản</h1>
                            <RegisterForm submitCb={this.registerUser} errors={errors}/>
                        </div>
                        <div className="col-md-6 ml-auto">
                            <div className="image-container">
                                <img src={shiba1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;