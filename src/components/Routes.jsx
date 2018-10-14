import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './Loading';

export const makeLoadable = loader => Loadable({ loader, loading: Loading });

const HomePage = () => import(/* webpackChunkName: 'home' */ './pages/Home');
const AboutPage = () => import(/* webpackChunkName: 'about' */ './pages/About');
const ContactPage = () => import(/* webpackChunkName: 'contact' */ './pages/Contact');

export default () => (
  <Switch>
    <Route exact path="/" component={makeLoadable(HomePage)} />
    <Route path="/about" component={makeLoadable(AboutPage)} />
    <Route path="/contact" component={makeLoadable(ContactPage)} />
  </Switch>
);
