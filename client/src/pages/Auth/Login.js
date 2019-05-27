import React, { Component } from 'react';
import {
    Form, FormGroup, Button
} from 'reactstrap';

import {
    Link
} from 'react-router-dom';

import {
    EmailInput,
    PasswordInput
} from './components/Fields';

import FormTitle from './components/FormTitle';

export default class Auth extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }

    handleInput = (e) => {
        const { name, value } = e.nativeEvent.target;

        this.setState({
            [name] : value
        });
        
    }

    login = () => {

    }

    render(){
        const { match } = this.props;

        return(
            <Form className = {'auth-form'}>

                <FormTitle>Login Form</FormTitle>

                <EmailInput 
                        name        = { 'email' }
                        onChange    = { this.handleInput }
                />

                <PasswordInput 
                        name        = { 'password' }
                        onChange    = { this.handleInput }
                />

                <FormGroup>
                    <Button
                        onClick = { this.login }
                        color = { 'success' }
                        block
                    >
                        Login
                    </Button>
                </FormGroup>

                <Link to = { `/auth/register` }>Not registered yet?</Link>
                
            </Form>
        )
    }
}