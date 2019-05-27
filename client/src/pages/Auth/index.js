import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Login from './Login';
import Register from './Register';

export default class Auth extends Component{
    constructor(){
        super();
        this.state = {
            form : 'Login'
        }
    }

    render(){
        const { match } = this.props;

        return(
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>

                        
                        <Switch>
                            <Route 
                                path    = { `${match.url}/login` }
                                component  = { Login }
                            />
                            
                            <Route 
                                path    = { `${match.url}/register` }
                                component  = { Register }
                            />
                            
                            <Route 
                                exact
                                path    = { match.url }
                                component  = { Login }
                            />

                        </Switch>
                

                    </Col>
                </Row>
            </Container>
        )
    }
}