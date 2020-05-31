import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
Meteor.methods({
      addRoles(roles) {
        
        Meteor.setTimeout(function () {
          var _id=this.userId;
          if (Meteor.roleAssignment.find({ 'user._id': _id }).count() === 0) {
          user.roles.forEach(function (roles) {
              Roles.createRole(roles, {unlessExists: true});
            });
            // Need _id of existing user record so this call must come after `Accounts.createUser`.
              Roles.addUsersToRoles(_id, roles);
            }
        }, 10);

        }
      }



      );
