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
