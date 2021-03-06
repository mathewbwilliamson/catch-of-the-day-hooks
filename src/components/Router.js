// Stopped at Video 10 and did not view video #11

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePicker from './StorePicker';
import App from './App'
import NotFound from './NotFound'
import { isRegExp } from 'util';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={StorePicker} />
            <Route path='/store/:storeId' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router