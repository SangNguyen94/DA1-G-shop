import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor'
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let typeOfUser= this.refs.typeOfUser.value;
    let isAdmin=false;
    let isConsumer=false;
    let isPublisher=false;

    if (password.length < 9) {
      return this.setState({error: 'Password must be more than 8 characters long'});
    }

    var _id;
     _id=Accounts.createUser({email, password }, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  



    //  Meteor.call('addRole',typeOfUser);


    //Meteor.call("addRole",_id,typeOfUser);
  //  if(isAdmin==true)
//{
  //    Roles.addUsersToRoles(_id,['admin'],Roles.GLOBAL_GROUP);
//    }
  //  else {
  //    Roles.addUsersToRoles(_id,typeOfUser);
  //  }




}
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <p>Choose your role</p>
            <select id="role" name="role" ref="typeOfUser">
            <option value="consumer">Consumer</option>
            <option value="publisher">Publisher</option>
            <option value="admin">Admin</option>

            </select>
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Have an account?</Link>
        </div>
      </div>
    );
  }
}
