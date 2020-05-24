import { Meteor } from 'meteor/meteor';
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

