import { Meteor } from 'meteor/meteor';
import {Items} from './../imports/API/item';

Meteor.startup(() => {
  Items.insert([{
    name: 'Doom eternal',
    price: 60
  },
  {
    name: 'witcher 3',
    price: 60
  }]);
  console.log(Items.find().fetch());
  // code to run on server at startup
});
