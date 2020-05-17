import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const gamesList = new Mongo.Collection('gamesList');

if (Meteor.isServer) {
  Meteor.publish('gamesList', function () {
    return gamesList.find({ userId: this.userId });
  });
}

// Meteor.methods({
//   'gamesList.insert'() {
//     if (!this.userId) {
//       throw new Meteor.Error('not-authorized');
//     }

//     return gamesList.insert({
//       _id:'',
//       gamesID: '',
//       userId: this.userId,
//       updatedAt: moment().valueOf()
//     });
//   },
//   'gamesList.remove'(_id) {
//     if (!this.userId) {
//       throw new Meteor.Error('not-authorized');
//     }

//     new SimpleSchema({
//       _id: {
//         type: String,
//         min: 1
//       }
//     }).validate({ _id });

//     gamesList.remove({ _id, userId: this.userId });
//   },
//   'gamesList.update'(_id, updates) {
//     if (!this.userId) {
//       throw new Meteor.Error('not-authorized');
//     }

//     new SimpleSchema({
//       _id: {
//         type: String,
//         min: 1
//       }

//     }).validate({
//       _id,
//       ...updates
//     });

//     gamesList.update({
//       _id,
//       userId: this.userId
//     }, {
//       $set: {
//         updatedAt: moment().valueOf(),
//         ...updates
//       }
//     });
//   }
// });
