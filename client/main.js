<<<<<<< HEAD
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

=======
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Items} from './../imports/API/item';
import {Tracker} from 'meteor/tracker';
Tracker.autorun(()=>{
  console.log('Items list',Items.find().fetch());
});
setTimeout(()=>{

},1000);
import './main.html';
>>>>>>> 42a8b68d5aa6f2b27842834533303a6f8711c8f6
