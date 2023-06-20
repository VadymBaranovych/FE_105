import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import CatalogPage from '../pages/CatalogPage';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={CatalogPage}
            />
            <Route
                path='/:category/;id'
                component={DetailPage}
            />
            <Route
                path='/:category'
                component={CatalogPage}
            />
            <Route
                path='/'
                exact
                component={HomePage}
            />
        </Switch>
    );
}

export default Routes;