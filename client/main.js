import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import { routes, onAuthChange,meteorID } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';
 
Tracker.autorun(() => {
   
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});

