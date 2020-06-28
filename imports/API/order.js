import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import { ReactiveAggregate } from 'meteor/tunguska:reactive-aggregate';
export const order= new Mongo.Collection('order');
if (Meteor.isServer) {
  Meteor.publish('order.user', function() {
    return cart.find({userId:this.userId});
  });
//   Meteor.publish('cart.quantity', function() {
//     ReactiveAggregate(this, cart, [
//       {
//         $match:{
//           userId:this.userId
//         }
//       },{
//         $project:{
//             quantity: { $cond: { if: { $isArray: "$products" }, then: { $size: "$products" }, else: "NA"} }
//          }
//       }
//    ],{clientCollection:'cartQuantity'} );
//   });
  Meteor.publish('order.bought', function() {
    return cart.find({bought:this.userId});
  });
}