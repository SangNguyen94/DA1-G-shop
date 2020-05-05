import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const games= new Mongo.Collection('games');
if (Meteor.isServer) {
  Meteor.publish('games', function() {
    return games.find({
      userId: this.userId
    });
  });
}
Meteor.methods({
    'games.insert'(){
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      return games.insert({
        _id: '',
        name:'',
        tags:'',
        userId: this.userId,
        updatedAt: moment().valueOf()
      });
    },
    'games.remove'(_id){
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      new SimpleSchema({
        _id: {
          type: String,
          min: 1
        }
      }).validate({ _id });

      games.remove({ _id, userId: this.userId });

    },
    'games.update'(_id, updates) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      new SimpleSchema({
        _id: {
          type: String,
          min: 1
        }

      }).validate({
        _id,
        ...updates
      });

      games.update({
        _id,
        userId: this.userId
      }, {
        $set: {
          updatedAt: moment().valueOf(),
          ...updates
        }
      });
    }
});
