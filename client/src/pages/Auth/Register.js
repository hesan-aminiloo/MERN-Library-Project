import React, { Component } from 'react';
import {
    Form,
    Button,
    FormGroup, Label, Input
} from 'reactstrap';

import {
    EmailInput,
    PasswordInput
} from './components/Fields';

import { Link } from 'react-router-dom';

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

    render(){
        const { match } = this.props;
        console.log({match})
        return(
            <Form className = {'auth-form'}>

                <FormTitle>Register Form</FormTitle>

                <EmailInput 
                        name        = { 'email' }
                        onChange    = { this.handleInput }
                />

                <PasswordInput 
                        name        = { 'password' }
                        onChange    = { this.handleInput }
                />

                <FormGroup>
                    <Label for = {'name-input'}>Name</Label>
                    <Input 
                        type    =   {'text'}
                        placeholder = {'Lucas Playford'}
                        name    =   {'name'}
                        id      =   {'name-input'}
                        onChange =   {this.handleInput}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for = {'address-input'}>Address</Label>
                    <Input 
                        type    =   {'textarea'}
                        placeholder = {'No.12 Groove st. US'}
                        name    =   {'address'}
                        id      =   {'address-input'}
                        onChange =   {this.handleInput}
                    />
                </FormGroup>

                <FormGroup>
                    <Button
                        onClick = { this.register }
                        color = { 'success' }
                        block
                    >
                        Register
                    </Button>
                </FormGroup>

                <Link to = { `/auth/login` }>Already registered? login!</Link>
                
            </Form>
        )
    }
}