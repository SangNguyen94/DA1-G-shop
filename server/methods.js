import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import {publisher} from '.././imports/api/publisher'
import {games} from '../imports/api/games'
import {gamesList} from '../imports/api/gamesList'
import shortid from 'shortid';
//Publisher

Meteor.methods({
    'publisher.insert':function(name,company,description){
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      return publisher.insert({
        _id: shortid.generate(),
        name:name,
        company:company,
        description:description,
        userId: this.userId,
        updatedAt: moment().valueOf()
      });
    },
    'publisher.remove'(_id){
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      new SimpleSchema({
        _id: {
          type: String,
          min: 1
        }
      }).validate({ _id });

      publisher.remove({ _id, userId: this.userId });

    },
    'publisher.update'(_id, updates) {
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

      publisher.update({
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
//GamesList
Meteor.methods({
    'gamesList.insert'() {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }
  
      return gamesList.insert({
        _id:'',
        gamesID: '',
        userId: this.userId,
        updatedAt: moment().valueOf()
      });
    },
    'gamesList.remove'(_id) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }
  
      new SimpleSchema({
        _id: {
          type: String,
          min: 1
        }
      }).validate({ _id });
  
      gamesList.remove({ _id, userId: this.userId });
    },
    'gamesList.update'(_id, updates) {
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
  
      gamesList.update({
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
  
//Games
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
