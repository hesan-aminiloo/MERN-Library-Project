import React from 'react';
import {
    FormGroup, Label, Input
} from 'reactstrap';

export const EmailInput = (props) => {
    return(
        <FormGroup>
            <Label for = {'email-input'}>Email</Label>
            <Input 
                type = {'email'} 
                name = { props.name }
                id   = {'email-input'}
                onChange = { props.onChange }
                placeholder = {'blah.blah@email.com'} 
            />
        </FormGroup>
    );
}

export const PasswordInput = (props) => {
    return(
        <FormGroup>
            <Label for = {'password-input'}>Password</Label>
            <Input 
                type = {'password'} 
                name = { props.name }
                id   = {'password-input'}
                onChange = { props.onChange }
            />
        </FormGroup>
    );
}