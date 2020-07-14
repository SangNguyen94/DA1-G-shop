import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import {publisher} from '.././imports/api/publisher'
import {games} from '../imports/api/games'
import {gamesList} from '../imports/api/gamesList'
import shortid from 'shortid';
import { cart } from '../imports/api/cart';
import { order } from '../imports/api/order';
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
    'gamesList.insert'(gamesID,publish) {
      
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }
  
      return gamesList.insert({
        _id:shortid.generate(),
        gamesID: gamesID,
        publish:publish,
        userId: this.userId,
        updatedAt: moment().valueOf()
      });
    },
    'gamesList.remove'(gameID) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }
      gamesList.remove({gameID:gameID , userId: this.userId });
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
    'games.insert'(_id,name,tags,price,sales,descr,pubCompany){
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      return games.insert({
        _id: _id,
        name:name,
        tags:tags,
        sale:Number(sales),
        price:Number(price),
        description:descr,
        company:pubCompany,
        bought:[],
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
    'games.update'(_id,name,tags,price,sales,descr) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }
      games.update({
        _id:_id,
        userId: this.userId,
      }, {
        $set: {
          updatedAt: moment().valueOf(),
          name:name,
          tags:tags,
          price:price,
          sale:sales,
          description:descr
        }
      });
      
    },
    'games.buy'(_id)
      {
        if(!this.userId)
        {
          throw new Meteor.Error('pleas log in');
        }
        new SimpleSchema({
          _id: {
            type: String,
            min: 1
          }
  
        }).validate({
          _id
        });
        games.update({_id},{
          $push:{
            bought:this.userId
          }
        });
      }
});
//cart
Meteor.methods({
  'cart.insert'()
  {
    if(!this.userId)
    {
      throw new Meteor.Error('please log in');
    }
    return cart.insert({
      userId:this.userId,
      products:[],
      updatedAt: moment().valueOf()
    });
  },
  
  'cart.add'(userID,gameID)
    {
      if(!this.userId)
      {
        throw new Meteor.Error('please log in');
      }
      new SimpleSchema({
        gameID: {
          type: String,
          min: 1
        }

      }).validate({
        gameID
      });
      cart.update({userId:userID},{
        $addToSet:{
          products:gameID
        }
    
      });
    },
    'cart.remove'(userID)
    {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      new SimpleSchema({
        userID: {
          type: String,
          min: 1
        }
      }).validate({ userID });

      cart.update({ userId:userID },{$set:{products:[]}});

    },
    'cart.remove.item'(userID,gameID)
    {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      new SimpleSchema({
        userID: {
          type: String,
          min: 1
        }
      }).validate({ userID });

      cart.update({ userId:userID },{$pull:{products:gameID}});
    }
});
Meteor.methods({
  'order.insert'(product,paypal,bank)
  {
    // check(paypal,Boolean);
    // check(bank,Boolean);
    if(!this.userId)
    {
      throw new Meteor.Error('please log in');
    }
    return order.insert({
      userId:this.userId,
      products:product,
      paypal:paypal,
      bank:bank,
      updatedAt: moment().valueOf()
    });
  },
  
  'order.add'(userID,gameID)
    {
      if(!this.userId)
      {
        throw new Meteor.Error('please log in');
      }
      new SimpleSchema({
        gameID: {
          type: String,
          min: 1
        }

      }).validate({
        gameID
      });
      order.update({userId:userID},{
        $addToSet:{
          products:gameID
        }
    
      });
    },
    'order.remove'(userID)
    {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      new SimpleSchema({
        userID: {
          type: String,
          min: 1
        }
      }).validate({ userID });

      order.update({ userId:userID },{$set:{products:[]}});

    },
    'order.remove.item'(userID,gameID)
    {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }

      new SimpleSchema({
        userID: {
          type: String,
          min: 1
        }
      }).validate({ userID });

      order.update({ userId:userID },{$pull:{products:gameID}});
    }
});
