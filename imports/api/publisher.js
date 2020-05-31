import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const publisher = new Mongo.Collection('publisher');
if (Meteor.isServer) {
  Meteor.publish('publisher.user', function() {
    return publisher.find({
      userId: this.userId
    });
  });
}
// Meteor.methods({
//     'publisher.insert'(){
//       if (!this.userId) {
//         throw new Meteor.Error('not-authorized');
//       }

//       return publisher.insert({
//         _id: '',
//         name:'',
//         company:'',
//         description:'',
//         userId: this.userId,
//         updatedAt: moment().valueOf()
//       });
//     },
//     'publisher.remove'(_id){
//       if (!this.userId) {
//         throw new Meteor.Error('not-authorized');
//       }

//       new SimpleSchema({
//         _id: {
//           type: String,
//           min: 1
//         }
//       }).validate({ _id });

//       publisher.remove({ _id, userId: this.userId });

//     },
//     'publisher.update'(_id, updates) {
//       if (!this.userId) {
//         throw new Meteor.Error('not-authorized');
//       }

//       new SimpleSchema({
//         _id: {
//           type: String,
//           min: 1
//         }

//       }).validate({
//         _id,
//         ...updates
//       });

//       publisher.update({
//         _id,
//         userId: this.userId
//       }, {
//         $set: {
//           updatedAt: moment().valueOf(),
//           ...updates
//         }
//       });
//     }
// });