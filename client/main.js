import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, combineReducer} from 'redux';
import {Provider} from 'react-redux';
import {Router,Route,browserHistory} from 'react-router';

import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import { routes, onAuthChange,meteorID, onPublisher } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';
 
Tracker.autorun(() => {
  
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});
// Add the reducer to your store on the `routing` key

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});

