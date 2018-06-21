/**
 * index
 *
 * create by Conyarck
 * 2018/5/30 09:03
 * @flow
 */

import { createStore, applyMiddleware } from 'redux';
import AppReducer from "../reducers";
import {
    createReactNavigationReduxMiddleware,
    createNavigationPropConstructor,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const navigationPropConstructor = createNavigationPropConstructor('root');

const store = createStore(
    AppReducer,
    applyMiddleware(middleware)
)

export {store, navigationPropConstructor};