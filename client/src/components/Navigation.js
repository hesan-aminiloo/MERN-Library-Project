import React, { PureComponent } from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Nav, 
    NavItem,
    NavLink
} from 'reactstrap';

export default class Navigation extends PureComponent{
    state = {
        isLogin : localStorage.getItem('token')
    }

    logout = () => {
        alert('Logout');
    }

    renderIfLogin = () => {
        return (
            <>
                <NavItem>
                    <NavLink tag={'span'}>
                        <Link to={'/customer'}>Customers</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={'span'}>
                        <a href={'javascript:;'} onClick = { this.logout } >
                            Logout
                        </a>
                    </NavLink>
                </NavItem>
            </>
        );
    }

    renderIfNotLogin = () => {
        return (
            <>
                <NavItem>
                    <NavLink tag={'span'}>
                        <Link to={'/auth'}>Login/Register</Link>
                    </NavLink>
                </NavItem>
            </>
        );
    }

    render(){
        return (
            <Nav className={'top-header'}>

                <NavItem>
                    <NavLink tag={'span'}>
                        <Link to={'/'}>Home</Link>
                    </NavLink> 
                </NavItem>

                <NavItem>
                    <NavLink tag={'span'}>
                        <Link to={'/book'}>Books</Link>
                    </NavLink>
                </NavItem>

                {
                    this.state.isLogin && this.renderIfLogin()
                }

                {
                    !this.state.isLogin && this.renderIfNotLogin()
                }

            </Nav>
        )
    }
}