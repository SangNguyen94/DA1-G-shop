import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import PublishGames from '../ui/PublishGames';
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/home'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/home');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};
const onEnterPublisherPage = () =>{
  if(!Meteor.userId()||!Roles.userIsInRole(Meteor.userId(),'publisher')){
    browserHistory.replace('/');
  }

}
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/home');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/home" component={Dashboard} onEnter={onEnterPrivatePage}/>
    <Route path="/publish-games" component ={PublishGames} onEnter={onEnterPublisherPage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
