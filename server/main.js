import { Meteor } from 'meteor/meteor';
<<<<<<< HEAD
import { WebApp } from 'meteor/webapp';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/users';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  var rp = require('fs.realpath');
rp.monkeypatch();
});
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
});

=======
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
>>>>>>> 42a8b68d5aa6f2b27842834533303a6f8711c8f6
