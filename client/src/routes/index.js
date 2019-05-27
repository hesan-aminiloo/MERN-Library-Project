import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import {
    Home,
    Profile,
    Customer,
    Book,
    Auth
} from '../pages';

import Navigation from '../components/Navigation';

export default class Routes extends PureComponent{

    render(){
        return(
            <div>
                
                <Router>

                    <Navigation />

                    <Route path={'/'} component={ Home } exact />
                    <Route path={'/profile'} component={ Profile } />
                    <Route path={'/customer'} component={ Customer } />
                    <Route path={'/book'} component={ Book } />
                    <Route path={'/auth'} component={ Auth } />

                </Router>

            </div>
        )
    }
}