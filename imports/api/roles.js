import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

Meteor.methods({
  addRole(users,roles){
    return Roles.addUsersToRoles(users,roles);
  }
});
