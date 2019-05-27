import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class Home extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        Home
                    </Col>
                </Row>
            </Container>
        )
    }
}