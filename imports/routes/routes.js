import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory,DefaultRoute } from 'react-router';
import PublishGames from '../ui/PublishGames';
import Signup from '../ui/Signup';

import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import AddPublisher from '../ui/AddPublisher'
import Hometempt from '../ui/Hometempt'
import FileUpload from "../ui/FileUpload"
import AddGames from '../ui/AddGames'

import DashBoardContainer from '../ui/DashBoardContainer';
const unauthenticatedPages = ['/', '/signup','/login'];
const authenticatedPages = ['/add-publisher','/publish-games','/logged'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/login');
  }
};
const onEnterPublisherPage = () =>{
 

}
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  
  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/logged');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
export const routes = (
  <Router history={browserHistory}>
    
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/" component={DashBoardContainer}/>
    <Route path='/logged' component={DashBoardContainer}/>
    <Route path='/add-games' component={AddGames} onEnter={onEnterPublisherPage}/>
    <Route path="/temp" component={Hometempt} onEnter={onEnterPrivatePage}/>
    <Route path="/add-publisher" component={AddPublisher} onEnter={onEnterPrivatePage}/>
    <Route path="/publish-games" component ={PublishGames} onEnter={onEnterPublisherPage}/>
    <Route path="*" component={NotFound}/>
    
  </Router>
);
